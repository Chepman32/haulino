import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
import './Auth.css'; // Import shared auth styles

const { Title } = Typography;

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
      setLoading(true);
    try {
      await Amplify.Auth.signIn(values.username, values.password);
      message.success(t('login.success'));
      navigate('/'); // Redirect to homepage after successful login
    } catch (error) {
      console.error('Login failed', error);
      message.error(t('login.error', { error: error.message }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Title level={2}>{t('login.title')}</Title>
      <Form
        name="loginForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label={t('login.username')}
          name="username"
          rules={[{ required: true, message: t('login.username.required') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('login.password')}
          name="password"
          rules={[{ required: true, message: t('login.password.required') }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} className="auth-button">
            {t('login.button')}
          </Button>
        </Form.Item>
        <Typography.Link onClick={() => navigate('/signup')}>{t('login.signupLink')}</Typography.Link>
      </Form>
    </div>
  );
};

export default LoginPage;
