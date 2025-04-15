import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Outlet, Link, useNavigate } from 'react-router-dom'; // Used to render child routes
import { useTranslation } from 'react-i18next';
import { Amplify, Auth } from 'aws-amplify';
import './MainLayout.css'; // Import styles

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  }

  async function signOut() {
    try {
      await Auth.signOut();
      navigate('/login');
    } catch (err) {
      console.log('error signing out: ', err);
    }
  }

  return (
    <Layout className="main-layout">
      <Header className="main-layout-header">
        <div className="logo">Haulino</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">{t('menu.home')}</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/create-order">{t('menu.createOrder')}</Link></Menu.Item>
          {user ? (
            <Button type="text" style={{ color: 'white' }} onClick={signOut}>{t('menu.signOut')}</Button>
          ) : (
            <>
              <Menu.Item key="3"><Link to="/login">{t('menu.login')}</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/signup">{t('menu.signUp')}</Link></Menu.Item>
            </>
          )}
        </Menu>
      </Header>
      <Content className="main-layout-content">
        {/* The Outlet component renders the matched child route component */}
        <Outlet />
      </Content>
      <Footer className="main-layout-footer">
        {/* Footer content will go here (e.g., Copyright, Links) */}
        Haulino ©{new Date().getFullYear()} - Move big. Move smart.
      </Footer>
    </Layout>
  );
};

export default MainLayout;
