import React from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify'; // Corrected: Import Amplify
import { CarOutlined, TeamOutlined, CheckCircleOutlined } from '@ant-design/icons'; // Example icons
import './HomePage.css'; // Import styles

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Placeholder data for services and benefits
  const services = [
    { key: 'furniture', title: 'service.furniture.title', description: 'service.furniture.description', icon: <CarOutlined /> },
    { key: 'appliances', title: 'service.appliances.title', description: 'service.appliances.description', icon: <CarOutlined /> },
    { key: 'movers', title: 'service.movers.title', description: 'service.movers.description', icon: <TeamOutlined /> },
  ];

  const benefits = [
    { key: 'fast', title: 'benefit.fast.title', description: 'benefit.fast.description', icon: <CheckCircleOutlined /> },
    { key: 'reliable', title: 'benefit.reliable.title', description: 'benefit.reliable.description', icon: <CheckCircleOutlined /> },
    { key: 'transparent', title: 'benefit.transparent.title', description: 'benefit.transparent.description', icon: <CheckCircleOutlined /> },
  ];

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <Row justify="center" align="middle" className="hero-section" style={{ /* Basic inline style for background */ background: '#1A2A44', color: 'white', minHeight: '40vh', textAlign: 'center', padding: '40px 20px' }}>
        <Col>
          {/* Placeholder for Logo */}
          <Title level={1} style={{ color: 'white' }}>{t('brand.name')}</Title>
          <Title level={3} style={{ color: '#00FF99', marginBottom: '30px' }}>{t('brand.slogan')}</Title>
          <Button
            type="primary"
            size="large"
            style={{ background: '#00FF99', borderColor: '#00FF99', color: '#1A2A44' }}
            // Simplify onClick: always navigate to the protected route
            onClick={() => navigate('/create-order')}
          >
            {t('homepage.cta.order')}
          </Button>
        </Col>
      </Row>

      {/* Services Section */}
      <Row gutter={[16, 16]} style={{ padding: '40px 20px' }} justify="center">
        <Col span={24} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2}>{t('homepage.services.title')}</Title>
        </Col>
        {services.map(service => (
          <Col key={service.key} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable>
              <Card.Meta
                avatar={service.icon}
                title={t(service.title)}
                description={t(service.description)}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Benefits Section */}
      <Row gutter={[16, 16]} style={{ padding: '40px 20px', background: '#f0f2f5' }} justify="center">
         <Col span={24} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2}>{t('homepage.benefits.title')}</Title>
        </Col>
        {benefits.map(benefit => (
          <Col key={benefit.key} xs={24} sm={12} md={8}>
             <Card bordered={false} style={{ textAlign: "center", background: 'transparent' }}>
               {React.cloneElement(benefit.icon, { style: { fontSize: '32px', color: '#00FF99', marginBottom: '10px' }})}
               <Title level={4}>{t(benefit.title)}</Title>
               <Paragraph>{t(benefit.description)}</Paragraph>
             </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
