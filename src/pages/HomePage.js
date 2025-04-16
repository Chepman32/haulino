import React, { useState, useEffect } from 'react'; // Import useState
import { Button, Card, Col, Input, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify'; // Corrected: Import Amplify
import { CarOutlined, TeamOutlined, CheckCircleOutlined } from '@ant-design/icons'; // Example icons
import './HomePage.css'; // Import styles

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Haulino - cities";
  }, []);

  // State for address inputs
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');

  // Handler for "See prices" button
  const handleSeePrices = () => {
    console.log('Pickup Address:', pickupAddress);
    console.log('Drop-off Address:', dropoffAddress);
    // Navigate or trigger price calculation logic here in the future
  };

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
      <Row justify="center" align="middle" className="hero-section" style={{ /* Basic inline style for background */ background: '#ADD8E6', color: 'white', minHeight: '40vh', textAlign: 'center', padding: '40px 20px' }}>
        <Col>
          {/* Placeholder for Logo */}
          <Title level={1} style={{ color: 'white' }}>{t('brand.name')}</Title>
          <Title level={3} style={{ color: 'black', marginBottom: '30px' }}>{t('brand.slogan')}</Title>
          <Paragraph style={{ color: 'white', marginBottom: '20px' }}>
            Move anything with the push of a button
          </Paragraph>
          <Paragraph style={{ color: 'white', marginBottom: '20px' }}>
            Fully insured. On your schedule. Arriving in as little as 30 minutes.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{ background: '#FFA500', borderColor: '#FFA500', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            onClick={() => navigate('/create-order')}
          >
            Book now
          </Button>

          {/* Address Inputs */}
          <Row gutter={16} justify="center" style={{ marginTop: '30px' }}>
            <Col xs={24} sm={10}>
              <Input
                placeholder="Pick up from"
                size="large"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
              />
            </Col>
            <Col xs={24} sm={10}>
              <Input
                placeholder="Move to"
                size="large"
                value={dropoffAddress}
                onChange={(e) => setDropoffAddress(e.target.value)}
              />
            </Col>
            <Col xs={24} sm={4}>
              <Button
                type="primary"
                size="large"
                style={{ background: '#FFA500', borderColor: '#FFA500', color: 'white', width: '100%' }}
                onClick={handleSeePrices}
              >
                See prices
              </Button>
            </Col>
          </Row>
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
      <Row gutter={[16, 16]} style={{ padding: '40px 20px', background: '#fff' }} justify="center">
         <Col span={24} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2}>{t('homepage.benefits.title')}</Title>
        </Col>
        {benefits.map(benefit => (
          <Col key={benefit.key} xs={24} sm={12} md={8}>
             <Card bordered={false} style={{ textAlign: "center", background: 'transparent' }}>
               {React.cloneElement(benefit.icon, { style: { fontSize: '32px', color: '#FFA500', marginBottom: '10px' }})}
               <Title level={4}>{t(benefit.title)}</Title>
               <Paragraph>{t(benefit.description)}</Paragraph>
             </Card>
          </Col>
        ))}
      </Row>

      {/* On-demand Moving Title */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24}>
          <Title level={2}>On-demand moving and furniture delivery</Title>
        </Col>
      </Row>

      {/* Track Movers Section */}
      <Row justify="center" align="middle" style={{ padding: '40px 20px', background: '#f0f2f5' }}>
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
          <Title level={3}>Track your movers in real time</Title>
          <Paragraph>En-route to pick-up</Paragraph>
          {/* Placeholder for tracking image/map */}
          <div style={{ height: '200px', background: '#ccc', margin: '20px auto', maxWidth: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Placeholder for Tracking Visual
          </div>
        </Col>
      </Row>

      {/* Movers on Schedule Section */}
      <Row justify="center" align="middle" style={{ padding: '40px 20px' }}>
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
          <Title level={3}>Movers on your schedule</Title>
          {/* Placeholder for Date/Time Selection */}
          <Row gutter={16} justify="center" style={{ marginTop: '20px' }}>
            <Col xs={24} sm={12}>
              <Paragraph>Select day</Paragraph>
              {/* Placeholder for Day Selector */}
              <div style={{ height: '50px', background: '#eee', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Day Selector</div>
            </Col>
            <Col xs={24} sm={12}>
              <Paragraph>Select time</Paragraph>
              {/* Placeholder for Time Selector */}
              <div style={{ height: '50px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Time Selector</div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Trucks Section */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>Trucks for your every size of move</Title>
        </Col>
        <Row gutter={[16, 16]} justify="center">
          {['Lugg Pickup', 'Lugg Van', 'Lugg XL', 'Lugg Box'].map(truck => (
            <Col key={truck} xs={12} sm={6}>
              <Card hoverable>
                {/* Placeholder for truck image */}
                <div style={{ height: '100px', background: '#ddd', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Truck Img</div>
                <Card.Meta title={truck} />
              </Card>
            </Col>
          ))}
        </Row>
      </Row>

      {/* Protected & Rated Movers Section */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={3}>Your items protected by our multi‑million dollar policy</Title>
          <Title level={4}>5‑star vetted and rated movers</Title>
        </Col>
        {/* Placeholder for Mover Stats/Badges */}
        <Row gutter={[16, 16]} justify="center">
          {['Teamwork 🤝', 'Expert movers 💪', 'Friendly 😁', 'Efficient ⏱', 'Went above and beyond 🚀'].map(badge => (
            <Col key={badge} xs={12} sm={8} md={4}>
              <Card size="small">
                <Paragraph strong>{badge.split(' ')[0]}</Paragraph>
                <Paragraph>{badge.split(' ').slice(1).join(' ')}</Paragraph>
                {/* Placeholder for count */}
                <Paragraph type="secondary">Count</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Placeholder for Mover Names/Avatars */}
        <Paragraph style={{ marginTop: '20px', fontStyle: 'italic' }}>Bob, Jack, Victor & Eugene...</Paragraph>
      </Row>

      {/* Occasions Section */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>A truck and movers for any occasion</Title>
        </Col>
        <Row gutter={[16, 16]} justify="center">
          {[
            'Home moving', 'Apartment moving', 'College moving', 'Storage moving', 'Office moving',
            'Furniture delivery', 'FB Marketplace delivery', 'Craigslist delivery', 'Appliance delivery',
            'Junk removal', 'Donation pick up', 'Labor only'
          ].map(occasion => (
            <Col key={occasion} xs={12} sm={8} md={6} lg={4}>
              <Card size="small" hoverable>
                <Paragraph>{occasion}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>

      {/* Get Estimate Section */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>Get an estimate</Title>
          <Paragraph>Enter your addresses to see your prices and schedule your move</Paragraph>
        </Col>
        {/* Address Inputs (Repeated) */}
        <Row gutter={16} justify="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Col xs={24} sm={10}>
             <Input
                placeholder="Pick up from"
                size="large"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
              />
          </Col>
          <Col xs={24} sm={10}>
             <Input
                placeholder="Move to"
                size="large"
                value={dropoffAddress}
                onChange={(e) => setDropoffAddress(e.target.value)}
              />
          </Col>
          <Col xs={24} sm={4}>
             <Button
                type="primary"
                size="large"
                style={{ background: '#FFA500', borderColor: '#FFA500', color: 'white', width: '100%' }}
                onClick={handleSeePrices}
              >
                See prices
              </Button>
          </Col>
        </Row>
      </Row>

      {/* Happy Customers Section */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>Millions of happy customers</Title>
        </Col>
        {/* Placeholder for Customer Reviews */}
        <Row gutter={[16, 16]} justify="center">
          {[1, 2, 3].map(reviewId => ( // Placeholder loop
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

      {/* FAQ Section */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>Frequently asked questions</Title>
        </Col>
        {/* Placeholder for FAQ Items */}
        <Col xs={24} md={16} style={{ textAlign: 'left' }}>
          {[
            'What hours does Lugg operate?',
            'Will the Luggers bring my items inside?',
            'How many items are included in the price of the Lugg?',
            'What are the dimensions of the Lugg vehicles?',
            'How much does a Lugg cost?',
            'Can Lugg help me move items within my home or from the street to my home?',
            'How do I tip and/or rate my crew?',
            'When do I pay for my Lugg?',
          ].map(faq => (
            <Paragraph key={faq}>
              <a href="#">{faq}</a> {/* Placeholder link */}
            </Paragraph>
          ))}
        </Col>
        <Col span={24}>
          <Button type="link" style={{ marginTop: '20px' }}>Visit help center</Button>
        </Col>
      </Row>

      {/* Become a Lugger Section */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24}>
          <Title level={2}>Become a Lugger</Title>
          <Paragraph>Earn money with your truck on your schedule</Paragraph>
          <Button type="primary" style={{ background: '#FFA500', borderColor: '#FFA500', color: 'white' }}>Learn more</Button>
          <Button type="link">Make money as a mover</Button>
        </Col>
      </Row>

      {/* Additional Services Section */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>Additional services</Title>
        </Col>
        <Col xs={24} md={18}>
          <Row gutter={[8, 8]} justify="center">
            {[
              'Affordable movers', 'Apartment moving', 'Appliance movers', 'Best U-Haul truck rental alternative',
              'Best moving truck rental alternative', 'Bicycle delivery', 'Big & bulky delivery', 'Commercial movers',
              'Couch movers', 'Couch moving service', 'Craigslist movers', 'Dorm room movers', 'EBike delivery',
              'Estate sale delivery', 'Estatesales.net delivery', 'Event rental moving and delivery',
              'Expert moving for every space', 'Fresh Flower delivery', 'Furniture delivery app', 'Furniture disposal',
              'Furniture haul away', 'Furniture movers', 'Furniture moving', 'Furniture removal', 'Garden center delivery',
              'Gym equipment delivery', 'Hardware delivery', 'Help moving furniture', 'Hire a helper', 'Hire movers',
              'Home improvement delivery', 'Home moving service', 'Home staging movers', 'Junk hauling', 'Junk pick up',
              'KSL Delivery', 'Last minute movers', 'Like Uber for moving', 'Local furniture delivery', 'Local movers',
              'Local moving', 'Lumber hauling and delivery', 'Mattress movers', 'Mattress removal', 'Medical equipment delivery',
              'Movers and trucks', 'Movers near me', 'Moving company', 'Moving help', 'My Self Storage Space moves',
              'Nursery delivery', 'On-demand movers', 'Outback Self Storage moves', 'Outlet delivery', 'Plant delivery',
              'Pop-up shop delivery', 'Portable storage moves', 'Professional movers', 'Refrigerator delivery',
              'Refrigerator movers', 'Residential movers', 'Residential moving and relocation', 'Same day movers',
              'Small moves', 'Sofa movers', 'Store delivery', 'TV delivery', 'The best movers movers nationwide',
              'The best moving company', 'Two men and a truck', 'Two movers and a truck', 'Uber for movers',
              'Used item delivery', 'Washer and dryer delivery'
            ].map(service => (
              <Col key={service} xs={12} sm={8} md={6} lg={4}>
                <a href="#">{service}</a> {/* Placeholder link */}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Keep in Touch Section */}
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
            style={{ background: '#FFA500', borderColor: '#FFA500' }} // Approximate styling
          />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
