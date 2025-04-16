import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import './CreateOrderPage.css';
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient();

const { Option } = Select;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by error boundary", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

const CreateOrderPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const user = await getCurrentUser();
      const orderDetails = {
        whatToTransport: values.whatToTransport,
        fromAddress: values.fromAddress,
        toAddress: values.toAddress,
        dateAndTime: values.dateAndTime,
        transportType: values.transportType,
        numLoaders: values.numLoaders,
        description: values.description,
        userID: user.userId,
      };

      const mutation = `
        mutation CreateOrder($input: CreateOrderInput!) {
          createOrder(input: $input) {
            id
            whatToTransport
            fromAddress
            toAddress
            dateAndTime
            transportType
            numLoaders
            description
            userID
          }
        }
      `;

      const variables = {
        input: {
          whatToTransport: orderDetails.whatToTransport,
          fromAddress: orderDetails.fromAddress,
          toAddress: orderDetails.toAddress,
          dateAndTime: orderDetails.dateAndTime,
          transportType: orderDetails.transportType,
          numLoaders: orderDetails.numLoaders,
          description: orderDetails.description,
          userID: orderDetails.userID,
        }
      };

      const response = await client.graphql({
        query: mutation,
        variables: variables,
      });

      console.log('Order created:', response);
      form.resetFields();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <ErrorBoundary>
      <div className="create-order-page">
        <div className="header">
          <h1>Create Order</h1>
        </div>

        <div className="main-content">
          <h2>Enter Order Details</h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="What to Transport"
              name="whatToTransport"
              rules={[{ required: true, message: 'Please enter what to transport!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Pickup Address"
              name="fromAddress"
              rules={[{ required: true, message: 'Please enter pickup address!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Drop-off Address"
              name="toAddress"
              rules={[{ required: true, message: 'Please enter drop-off address!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Date and Time"
              name="dateAndTime"
              rules={[{ required: true, message: 'Please enter date and time!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Type of Transportation"
              name="transportType"
              rules={[{ required: true, message: 'Please select transportation type!' }]}
            >
              <Select defaultValue="truck">
                <Option value="truck">Truck</Option>
                <Option value="van">Van</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Number of Loaders"
              name="numLoaders"
              rules={[{ required: false, message: 'Please enter number of loaders!' }]}
            >
              <Select defaultValue="1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: false, message: 'Please enter description!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Order
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CreateOrderPage;
