import React from "react";
import { Layout, Menu, Button, Dropdown, Row, Col, Typography } from "antd"; // Dropdown is already imported
// Import placeholder icons (replace with actual icons later)
import { HomeOutlined, ApartmentOutlined, ReadOutlined, ShopOutlined, TeamOutlined, CarOutlined, FacebookOutlined, ShoppingCartOutlined, ToolOutlined, DeleteOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthenticator } from '@aws-amplify/ui-react';
import "./MainLayout.css";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const MainLayout = () => {
  const { t, i18n } = useTranslation(); // Get i18n instance
  const navigate = useNavigate(); // Initialize useNavigate
  const { user, signOut } = useAuthenticator((context) => [context.user, context.signOut]); // Use the hook

  // Function to handle language change
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.key);
  };

  // Language dropdown menu
  const languageMenu = (
    <Menu onClick={handleLanguageChange}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="ru">Русский</Menu.Item>
    </Menu>
  );

  // Define services for the dropdown
  const services = [
    { key: 'home-moving', title: 'Home moving', icon: <HomeOutlined />, path: '/services/home-moving' },
    { key: 'apartment-moving', title: 'Apartment moving', icon: <ApartmentOutlined />, path: '/services/apartment-moving' },
    { key: 'college-moving', title: 'College moving', icon: <ReadOutlined />, path: '/services/college-moving' },
    { key: 'storage-moving', title: 'Storage moving', icon: <ShopOutlined />, path: '/services/storage-moving' },
    { key: 'office-moving', title: 'Office moving', icon: <TeamOutlined />, path: '/services/office-moving' },
    { key: 'furniture-delivery', title: 'Furniture delivery', icon: <CarOutlined />, path: '/services/furniture-delivery' },
    { key: 'fb-marketplace-delivery', title: 'FB Marketplace delivery', icon: <FacebookOutlined />, path: '/services/fb-marketplace-delivery' },
    { key: 'craigslist-delivery', title: 'Craigslist delivery', icon: <ShoppingCartOutlined />, path: '/services/craigslist-delivery' },
    { key: 'appliance-delivery', title: 'Appliance delivery', icon: <ToolOutlined />, path: '/services/appliance-delivery' },
    { key: 'junk-removal', title: 'Junk removal', icon: <DeleteOutlined />, path: '/services/junk-removal' },
    { key: 'donation-pickup', title: 'Donation pick up', icon: <HeartOutlined />, path: '/services/donation-pickup' },
    { key: 'labor-only', title: 'Labor only', icon: <UserOutlined />, path: '/services/labor-only' },
  ];

  // Create the dropdown menu content with two columns
  const servicesMenu = (
    <Menu style={{ width: 400, padding: '10px' }}> {/* Adjust width as needed */}
      <Row gutter={16}>
        <Col span={12}>
          {services.slice(0, Math.ceil(services.length / 2)).map(service => (
            <Menu.Item key={service.key} icon={service.icon}>
              <Link to={service.path}>{service.title}</Link>
            </Menu.Item>
          ))}
        </Col>
        <Col span={12}>
          {services.slice(Math.ceil(services.length / 2)).map(service => (
            <Menu.Item key={service.key} icon={service.icon}>
              <Link to={service.path}>{service.title}</Link>
            </Menu.Item>
          ))}
        </Col>
      </Row>
    </Menu>
  );


  return (
    <Layout className="main-layout">
      {/* Apply Flexbox styling directly to the Header */}
      <Header
        className="main-layout-header"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        {/* Logo remains on the left */}
        <div className="logo">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Haulino
          </Link>
        </div>

        {/* Container for right-aligned items */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Lugg.com style Menu */}
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "64px", borderBottom: "none", background: 'transparent' }}
            selectable={false}
          >
            {/* Services Dropdown */}
            <Dropdown overlay={servicesMenu} trigger={['hover']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: "white", display: 'inline-block', lineHeight: '64px', padding: '0 15px' }}>
                Services
              </a>
            </Dropdown>
            <Menu.Item key="cities"><Link to="/cities" style={{ color: "white" }}>Cities</Link></Menu.Item>
            <Menu.Item key="retailers"><Link to="/retailers" style={{ color: "white" }}>Retailers</Link></Menu.Item>
            <Menu.Item key="become-lugger"><Link to="/become-lugger" style={{ color: "white" }}>Become a Lugger</Link></Menu.Item>
          </Menu>

          {/* Buttons on the right */}
          <Button type="default" style={{ marginLeft: '16px' }} onClick={() => navigate('/estimate')}>Get estimate</Button>
          {user ? (
             <Button type="primary" style={{ marginLeft: '8px' }} onClick={signOut}>Sign out</Button>
          ) : (
             <Button type="primary" style={{ marginLeft: '8px' }} onClick={() => navigate('/create-order')}>Sign in</Button>
          )}
          <Button
            type="primary"
            style={{
              marginLeft: '8px',
              background: 'linear-gradient(to right, #007bff, #ff0000)',
              borderColor: '#007bff',
            }}
            onClick={() => navigate('/create-order')}
          >
            Book now
          </Button>
        </div>
      </Header>
      <Content className="main-layout-content">
        {/* The Outlet component renders the matched child route component */}
        <Outlet />
      </Content>
      <Footer className="main-layout-footer" style={{ background: '#fff', padding: '40px 20px', color: '#333' }}>
        <Row gutter={[16, 32]} justify="center">
          {/* Column 1: Lugg */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>Lugg</Title>
            <Paragraph><Link to="/account">My account</Link></Paragraph>
            <Paragraph><Link to="/cities">Cities</Link></Paragraph>
            <Paragraph><Link to="/retailers">Retailers</Link></Paragraph>
            <Paragraph><Link to="/estimate">Get estimate</Link></Paragraph>
            <Paragraph><Link to="/become-lugger">Become a Lugger</Link></Paragraph>
          </Col>
          {/* Column 2: Services */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>Services</Title>
            <Paragraph><Link to="/moving">Moving</Link></Paragraph>
            <Paragraph><Link to="/furniture-delivery">Furniture delivery</Link></Paragraph>
            <Paragraph><Link to="/craigslist-delivery">Craigslist delivery</Link></Paragraph>
            <Paragraph><Link to="/fb-marketplace-delivery">FB Marketplace delivery</Link></Paragraph>
            <Paragraph><Link to="/donation-pickup">Donation pick up</Link></Paragraph>
            <Paragraph><Link to="/junk-removal">Junk removal</Link></Paragraph>
            <Paragraph><Link to="/labor-only">Labor only</Link></Paragraph>
          </Col>
          {/* Column 3: Support */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>Support</Title>
            <Paragraph><Link to="/help">Help center</Link></Paragraph>
            <Paragraph><Link to="/contact">Contact us</Link></Paragraph>
            <Paragraph><Link to="/safety">Safety</Link></Paragraph>
          </Col>
          {/* Column 4: About */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5}>About</Title>
            <Paragraph><Link to="/blog">Blog</Link></Paragraph>
            <Paragraph><Link to="/careers">Careers</Link></Paragraph>
            <Paragraph>Move anything, anywhere, anytime!</Paragraph>
            <Paragraph>Download our app.</Paragraph>
            {/* Placeholder for App Store/Google Play buttons */}
            <Button style={{ marginRight: '8px' }}>App Store</Button>
            <Button>Google Play</Button>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
          <Col xs={24} sm={12} style={{ textAlign: 'left' }}>
            <Text type="secondary">Lugg © {new Date().getFullYear()}</Text>
          </Col>
          <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
            <Link to="/privacy" style={{ marginRight: '15px' }}>Privacy</Link>
            <Link to="/terms" style={{ marginRight: '15px' }}>Terms</Link>
            <Link to="/sitemap">Sitemap</Link>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
