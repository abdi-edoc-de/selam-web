import React from "react";
import { Row, Col, Image, Avatar, Space } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import Login from "./Login";
import "./static/style.css";
const App = () => {
  return (
    // xs={2} sm={4} md={6} lg={8} xl={10}
    <div className="banner">
      <Row className="header-row">
        <Col className="header" span={24}>
          <Space className="logo">
            <Image
              className="logo-image"
              width={60}
              preview={false}
              src="/logo1.png"
            ></Image>
            <h2>Selam Express</h2>
          </Space>
        </Col>
      </Row>
      <Row style={{ height: "85%" }}>
        <Col className="description" xl={12} lg={12} md={12} sm={24} xs={24}>
          <div className="description-div">
            <h2 id="welcome">
              Welcome <br />
              <span id="DLB"> To Selam Express </span>
            </h2>
            <p id="description">Please login to your Selam Express account.</p>
          </div>
        </Col>
        <Col className="login" xl={12} lg={12} md={12} sm={24} xs={24}>
          <div className="login-div">
            <Login />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default App;
