import React, { useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker, Typography } from 'antd'; // Removed InputNumber as it wasn't used
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'; // Import styles for the Authenticator
import { createOrder } from '../graphql/mutations';
import './CreateOrderPage.css';
import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api'; // Import generateClient

const { Title } = Typography;
const { Option } = Select;

const client = generateClient(); // Initialize the client

const CreateOrderPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Haulino - cities";
  }, []);

  const onFinish = async (values) => {
    try {
      const user = await getCurrentUser(); // Use getCurrentUser
      const userID = user.userId; // Access userId

      const orderDetails = {
        whatToTransport: values.whatToTransport,
        fromAddress: values.fromAddress,
        toAddress: values.toAddress,
        dateAndTime: values.dateAndTime,
        transportType: values.transportType,
        numLoaders: values.numLoaders ? parseInt(values.numLoaders) : 0,
        description: values.description,
        userID: userID,
      };

      await client.graphql({ // Use the client
        query: createOrder,
        variables: { input: orderDetails },
      });

      console.log('Order created successfully!');
      // After successful order creation, redirect to order confirmation page or similar
      // navigate('/order-confirmation');
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="create-order-container">
      <Title level={2}>{t('createOrder.title')}</Title>
      <Form
        name="createOrderForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label={t('createOrder.whatToTransport')}
          name="whatToTransport"
          rules={[{ required: true, message: t('createOrder.whatToTransport.required') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('createOrder.fromAddress')}
          name="fromAddress"
          rules={[{ required: true, message: t('createOrder.fromAddress.required') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('createOrder.toAddress')}
          name="toAddress"
          rules={[{ required: true, message: t('createOrder.toAddress.required') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('createOrder.dateAndTime')}
          name="dateAndTime"
          rules={[{ required: true, message: t('createOrder.dateAndTime.required') }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>

        <Form.Item
          label={t('createOrder.transportType')}
          name="transportType"
          rules={[{ required: true, message: t('createOrder.transportType.required') }]}
        >
          <Select placeholder={t('createOrder.transportType.placeholder')}>
            <Option value="pickup">{t('createOrder.transportType.pickup')}</Option>
            <Option value="boxTruck">{t('createOrder.transportType.boxTruck')}</Option>
            {/* Add more transport types as needed */}
          </Select>
        </Form.Item>

        <Form.Item
          label={t('createOrder.numLoaders')}
          name="numLoaders"
        >
          <Select placeholder={t('createOrder.numLoaders.placeholder')}>
            <Option value="0">{t('createOrder.numLoaders.none')}</Option>
            <Option value="1">1 {t('createOrder.numLoaders.person')}</Option>
            <Option value="2">2 {t('createOrder.numLoaders.people')}</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={t('createOrder.description')}
          name="description"
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t('createOrder.button')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// Export the component
export default CreateOrderPage;
