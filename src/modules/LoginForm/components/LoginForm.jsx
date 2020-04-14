import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Block } from "../../../components/index";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Sign In to Messenger</h2>
        </div>
        <Block>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
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

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Sign In
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/register">
              Create an account
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}
