import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Outlet, Link, useNavigate } from "react-router-dom"; // Used to render child routes
import { useTranslation } from "react-i18next";
import { Amplify } from "aws-amplify";
/* global Amplify */
import "./MainLayout.css"; // Import styles

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const { t, i18n } = useTranslation(); // Get i18n instance
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Amplify.Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  }

  async function signOut() {
    try {
      await Amplify.Auth.signOut();
      navigate("/login");
    } catch (err) {
      console.log("error signing out: ", err);
    }
  }

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
          {/* Menu items (without the language dropdown) */}
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "64px", borderBottom: "none" }} // Remove float and bottom border
            selectable={false}
          >
            {/* Existing Menu Items */}
            <Menu.Item key="createOrder">
              <Link to="/create-order">{t("createOrder.title")}</Link>
            </Menu.Item>
            {user ? (
              <Menu.Item key="signOut">
                <Button
                  type="text"
                  style={{ color: "white", padding: 0 }}
                  onClick={signOut}
                >
                  {t("homepage.menu.signOut")} {/* Updated key */}
                </Button>
              </Menu.Item>
            ) : (
              <>
                <Menu.Item key="login">
                  <Link to="/login">{t("login.title")}</Link>
                </Menu.Item>
                <Menu.Item key="signUp">
                  <Link to="/signup">{t("homepage.menu.signUp")}</Link> {/* Updated key */}
                </Menu.Item>
              </>
            )}
          </Menu>

          {/* Language Switcher Dropdown - Placed after the Menu */}
          <Dropdown overlay={languageMenu} placement="bottomRight">
            {/* Add some left margin for spacing */}
            <Button type="text" style={{ color: "white", marginLeft: "16px" }}>
              <GlobalOutlined /> {i18n.language.split("-")[0].toUpperCase()}
            </Button>
          </Dropdown>
        </div>
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
