import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import "../static/style.css";
import { useDispatch, useSelector } from "react-redux";
import { login, getIsLogin } from "../store/auth";

const App = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    dispatch(login(values));
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1 className="login-form-h1"> Sign In</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Row>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <div className="login-form-left">
              <Form.Item
                className="login-fo"
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <a className="login-form-right" href="">
              Forgot password
            </a>{" "}
          </Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default App;
