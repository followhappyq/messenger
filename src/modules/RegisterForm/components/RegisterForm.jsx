import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  MailTwoTone,
} from "@ant-design/icons";
import { Button, Block } from "../../../components/index";

export default class RegisterForm extends Component {
  render() {
    const success = false;
    return (
      <div>
        <div className="auth__top">
          <h2>Registration</h2>
        </div>
        <Block>
          {!success ? (
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
                name="e-mail"
                rules={[
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="E-mail"
                  prefix={<MailOutlined />}
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

              <Form.Item
                name="confirm-password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  prefix={<LockOutlined />}
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  Register
                </Button>
              </Form.Item>
              <Link className="auth__register-link" to="/login">
                Sign In
              </Link>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <MailTwoTone style={{ fontSize: "50px" }} />
              </div>
              <h3>Please verify your e-mail address.</h3>
            </div>
          )}
        </Block>
      </div>
    );
  }
}
