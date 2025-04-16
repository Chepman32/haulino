import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

// Helper function to format slug to title (simple example)
const formatSlugToTitle = (slug) => {
  if (!slug) return 'Service Detail';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams(); // Get the dynamic part of the URL

  const serviceTitle = formatSlugToTitle(serviceSlug);

  return (
    <div className="service-detail-container" style={{ padding: '40px 20px' }}>
      <Row justify="center">
        <Col xs={24} md={18} lg={16}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '30px' }}>
            {serviceTitle}
          </Title>
          <Paragraph style={{ textAlign: 'center', fontSize: '1.1em' }}>
            This is the detail page for the "{serviceTitle}" service.
            Content specific to this service will go here.
          </Paragraph>
          {/* Add more specific content based on the serviceSlug later */}
        </Col>
      </Row>
    </div>
  );
};

export default ServiceDetailPage;
