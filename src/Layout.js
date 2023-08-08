import React, { useState } from "react";
import "./static/layout.css";
import Collapsable from "./components/Collapsable";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Image, Space } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        backgroundColor: colorBgContainer,
      }}
    >
      {/* <Header
        style={{
          padding: 0,
          minHeight: "15vh",
          backgroundColor: colorBgContainer,
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
        theme="light"
      >
        <Space className="logo-layout">
          <Image
            className="logo-image"
            width={70}
            preview={false}
            src="/logo1.png"
          ></Image>
          <h2>Selam Express</h2>
        </Space>
      </Header> */}
      <Layout
        style={{
          minHeight: "85vh",
          backgroundColor: colorBgContainer,
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          width={"10vw"}
          style={{
            background: colorBgContainer,
            position: "sticky",
            top: 0,
            zIndex: 1,
            height: "100vh",
          }}
          onCollapse={(value) => setCollapsed(value)}
        >
          {/* <Space className="logo-layout">
            <Image
              className="logo-image"
              width={70}
              preview={false}
              src="/logo1.png"
            ></Image> 
            <h2 >Selam Express</h2>
          </Space> */}
          <Menu
            style={{
              border: "none",
              marginTop: "30vh",

            }}
            theme="light"
            defaultSelectedKeys={["1"]}
            // mode="inline"
            mode="vertical"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
        style={{
          padding: 0,
          minHeight: "15vh",
          backgroundColor: colorBgContainer,
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
        theme="light"
      >
        <Space className="logo-layout">
          <Image
            className="logo-image"
            width={50}
            preview={false}
            src="/logo1.png"
          ></Image>
          <h2>Selam Express</h2>
        </Space>
      </Header>
          <Content
            style={{
              background: colorBgContainer,
            }}
          >
            <div className="main-content">
              <Collapsable />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
