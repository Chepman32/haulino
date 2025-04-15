import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify'; // Corrected: Only Amplify needed here
import { createUser } from '../../graphql/mutations'; // Corrected path
import './Auth.css'; // Import shared auth styles

const { Title } = Typography;

const SignupPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
      setLoading(true);
    try {
      const { user } = await Amplify.Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email, // required
          name: values.name, // Store name
          phone_number: values.phone, // Store phone number
        },
      });

      // Create user in database
      await Amplify.API.graphql({ // Corrected: Use Amplify.API
        query: createUser,
        variables: {
          input: {
            id: user.attributes.sub, // Use the user's sub (UUID) as the id
            email: values.email,
            name: values.name,
            phone: values.phone,
          },
        },
      });

      message.success(t('signup.success'));
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Signup failed', error);
      message.error(t('signup.error', { error: error.message }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Title level={2}>{t('signup.title')}</Title>
      <Form
        name="signupForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label={t('signup.name')}
          name="name"
          rules={[{ required: true, message: t('signup.name.required') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('signup.email')}
          name="email"
          rules={[{ required: true, message: t('signup.email.required') }, { type: 'email', message: t('signup.email.invalid') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('signup.phone')}
          name="phone"
          rules={[{ required: true, message: t('signup.phone.required') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('signup.password')}
          name="password"
          rules={[
            { required: true, message: t('signup.password.required') },
            { min: 8, message: t('signup.password.min') },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={t('signup.confirmPassword')}
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: t('signup.confirmPassword.required') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('signup.confirmPassword.match')));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} className="auth-button">
            {t('signup.button')}
          </Button>
        </Form.Item>
        <Typography.Link onClick={() => navigate('/login')}>{t('signup.loginLink')}</Typography.Link>
      </Form>
    </div>
  );
};

export default SignupPage;
