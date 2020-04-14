import React from "react";
import { Form, Input} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Block } from "../../components/index";

import "./Auth.scss";



const Auth = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="auth">
      <div className="autn__content">
        <div className="auth__top">
          <h2>Sign In to Messenger</h2>
        </div>
        <Block>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                placeholder="Login"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                prefix={<LockOutlined />}
                size="large"
              />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit" size="large">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Block>
      </div>
    </section>
  );
};

export default Auth;
