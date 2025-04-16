import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Input, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// Corrected icon import: Replaced SofaOutlined with HomeOutlined
import { CarOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import './HomePage.css';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Haulino";
  }, []);

  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');

  const handleSeePrices = () => {
    console.log('Pickup Address:', pickupAddress);
    console.log('Drop-off Address:', dropoffAddress);
  };

  const services = [
    { key: 'truckFreight', title: 'Truck Freight', description: 'Find local truck operators for any load.', icon: <CarOutlined /> },
    // Corrected icon usage: Replaced SofaOutlined with HomeOutlined
    { key: 'furnitureMoving', title: 'Furniture Moving', description: 'Get assistance with moving heavy items.', icon: <HomeOutlined /> },
    { key: 'laborHelp', title: 'Labor Help', description: 'Hire skilled labor for loading and unloading', icon: <UserOutlined /> },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <Title className="hero-title">Move big. Move smart.</Title>
          <Button type="primary" size="large" className="get-quote-button">
            Get a quote
          </Button>
        </div>
        <img src={require('../assets/car.png')} style={{width: "50%"}} alt="Car" className="hero-image" />
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <Input placeholder="Where are you moving?" size="large" className="address-input"/>
        <Input placeholder="Register as a carrier" size="large" className="address-input"/>
      </div>

      {/* Our Services Section */}
      <div className="services">
        <Title level={2} className="services-title">Our Services</Title>
        <Row gutter={[16, 16]} justify="center">
          {services.map(service => (
            <Col key={service.key} xs={24} sm={12} md={8}>
              <Card
                className="service-card"
                cover={
                  <div className="service-icon">{React.cloneElement(service.icon, { style: { fontSize: '48px' } })}</div>
                }
                bordered={false}
              >
                <Card.Meta
                  title={service.title}
                  description={service.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
