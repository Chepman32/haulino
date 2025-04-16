import React, { useState } from 'react';
import { Row, Col, Typography, Input, Button, Card, Radio, Tabs } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons'; // For map placeholder
import './EstimatePage.css'; // Create this CSS file next

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

const EstimatePage = () => {
  // State for address inputs
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const [selectedTruck, setSelectedTruck] = useState('Van'); // Default truck type
  const [itemSize, setItemSize] = useState('Avg. Studio'); // Default item size

  const handleSeePrices = () => {
    console.log('Pickup Address:', pickupAddress);
    console.log('Drop-off Address:', dropoffAddress);
    // Trigger estimate calculation logic here
  };

  const truckTypes = [
    { key: 'Pickup', label: 'Pickup', luggers: 2, desc: 'Great for a few medium-sized items or a small number of larger pieces. Good fit for a couch, an appliance, or several large boxes.' },
    { key: 'Van', label: 'Van', luggers: 2, desc: 'Great for medium to large moves. Perfect for moving multiple furniture pieces such as a living room or bedroom set.' },
    { key: 'XL', label: 'XL', luggers: 2, desc: 'Great for large moves or bulky items. Best for studio to one-bedroom apartment moves, oversized items, or multiple-room deliveries.' },
    { key: 'Box', label: 'Box', luggers: 2, desc: 'Great for larger home moves and big deliveries. Ideal for moving a 2-3 bedroom home, multiple large appliances, or bulky furniture.' },
  ];

  const itemSizes = ['Few items', 'Avg. Studio', 'Avg. 1 BR', 'Avg. 2 BR'];

  return (
    <div className="estimate-page-container">
      {/* Title Section */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col>
          <Title level={1}>Get an estimate</Title>
          <Paragraph>Enter your addresses to see your prices and schedule your Lugg</Paragraph>
        </Col>
      </Row>

      {/* Map and Address Input Section */}
      <Row gutter={[16, 16]} style={{ padding: '0 20px 40px 20px' }}>
        {/* Address Inputs & Estimate Details */}
        <Col xs={24} md={8}>
          <Card>
            <Title level={4}>Pick up from</Title>
            <Input
              placeholder="Enter pickup address"
              size="large"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              style={{ marginBottom: '20px' }}
            />
            <Title level={4}>Move to</Title>
            <Input
              placeholder="Enter drop-off address"
              size="large"
              value={dropoffAddress}
              onChange={(e) => setDropoffAddress(e.target.value)}
              style={{ marginBottom: '20px' }}
            />
            <Button
              type="primary"
              size="large"
              block
              onClick={handleSeePrices}
              style={{ background: '#FFA500', borderColor: '#FFA500' }}
            >
              See prices
            </Button>

            <div className="estimate-details" style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <Title level={4}>Understand your estimate</Title>
              <Paragraph>Enter addresses to explore prices with how many items you need moved</Paragraph>

              <Tabs defaultActiveKey={selectedTruck} onChange={setSelectedTruck}>
                {truckTypes.map(truck => <TabPane tab={truck.label} key={truck.key} />)}
              </Tabs>

              <Radio.Group
                options={itemSizes}
                onChange={(e) => setItemSize(e.target.value)}
                value={itemSize}
                optionType="button"
                buttonStyle="solid"
                style={{ marginTop: '15px', marginBottom: '20px', display: 'flex', flexWrap: 'wrap' }}
              />
              <Paragraph>Estimated time: 20 min (This is only an estimate)</Paragraph>

              <Row justify="space-between"><Text>Base fare</Text><Text>$—</Text></Row>
              <Row justify="space-between"><Text>Traveled miles</Text><Text>$—</Text></Row>
              <Row justify="space-between"><Text>Labor fee</Text><Text>$—</Text></Row>
              <Row justify="space-between" style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                <Text strong>Total price (estimated)</Text><Text strong>$—</Text>
              </Row>
              <Button type="primary" block style={{ marginTop: '20px', background: '#FFA500', borderColor: '#FFA500' }}>Continue</Button>
            </div>
          </Card>
        </Col>

        {/* Map Placeholder */}
        <Col xs={24} md={16}>
          <div className="map-placeholder" style={{ height: '600px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: '1px solid #ccc' }}>
            <EnvironmentOutlined style={{ fontSize: '48px', color: '#888' }} />
            <Paragraph style={{ marginTop: '10px', color: '#888' }}>
              Google Map Placeholder
            </Paragraph>
            <Text type="secondary">(Map integration requires API setup)</Text>
          </div>
        </Col>
      </Row>

      {/* Top Rated Movers Section */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24}><Title level={3}>Top rated movers nationwide</Title></Col>
        {/* Placeholder for ratings */}
        <Col xs={12} sm={6}><Paragraph>Platform 1: 4.9/5 (745K Reviews)</Paragraph></Col>
        <Col xs={12} sm={6}><Paragraph>Platform 2: 4.9/5 (37.8K Ratings)</Paragraph></Col>
        <Col xs={12} sm={6}><Paragraph>Platform 3: 4.8/5 (816 Reviews)</Paragraph></Col>
        <Col xs={12} sm={6}><Paragraph>Platform 4: 4.8/5 (463 Reviews)</Paragraph></Col>
      </Row>

      {/* Truck Types / Service Levels Section */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}><Title level={2}>For all moves, big or small</Title></Col>
        <Row gutter={[16, 16]} justify="center">
           <Col xs={24} sm={12} md={4}>
             <Card title="Lite">
               <Paragraph>1 Lugger</Paragraph>
               <Paragraph>Great for small, lightweight moves. Ideal for moving a few boxes, compact furniture, or when you only need one mover.</Paragraph>
             </Card>
           </Col>
          {truckTypes.map(truck => (
            <Col key={truck.key} xs={24} sm={12} md={4}>
              <Card title={truck.label}>
                <Paragraph>{truck.luggers} Luggers</Paragraph>
                <Paragraph>{truck.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>

      {/* 3 Easy Steps Section */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
         <Col span={24} style={{ marginBottom: '20px' }}><Title level={2}>Anything moved in 3 easy steps.</Title></Col>
         <Row gutter={16}>
           <Col xs={24} md={8}>
             <Card title="1. Book your Lugg">
               <Paragraph>Set your pickup location and destination, select the size of vehicle that is right for you, and choose a time you would like us to arrive.</Paragraph>
               <Button type="link">Our website</Button>
               <Button type="link">Mobile app</Button>
             </Card>
           </Col>
           <Col xs={24} md={8}>
             <Card title="2. We’ll take it from here">
               <Paragraph>Two strong Luggers arrive to load your stuff and secure it safely. We'll see you at the destination!</Paragraph>
             </Card>
           </Col>
           <Col xs={24} md={8}>
             <Card title="3. Rate & tip">
               <Paragraph>We’ll unload your items and place them right where you want them. Let us know how we did and tip your Luggers for a job well done.</Paragraph>
             </Card>
           </Col>
         </Row>
      </Row>

      {/* Happy Customers Section (Placeholder/Reused) */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>Millions of happy customers</Title>
        </Col>
        {/* Placeholder for Customer Reviews Carousel/Grid */}
        <Row gutter={[16, 16]} justify="center">
          {[1, 2, 3].map(reviewId => (
            <Col key={reviewId} xs={24} sm={12} md={8}>
              <Card>
                <Paragraph>"Placeholder review text..."</Paragraph>
                <Paragraph strong>- Placeholder Name, Location</Paragraph>
                <Paragraph>Rating: 5.0</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
        <Button type="link" style={{ marginTop: '20px' }}>See all reviews</Button>
      </Row>

      {/* Keep in Touch Section (Reused) */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '10px' }}>
          <Title level={3}>Keep in touch</Title>
          <Paragraph>Sign up for email announcements, deals, and more!</Paragraph>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Input.Search
            placeholder="Email address..."
            enterButton="Subscribe"
            size="large"
            onSearch={value => console.log(value)} // Placeholder action
          />
        </Col>
      </Row>

    </div>
  );
};

export default EstimatePage;
