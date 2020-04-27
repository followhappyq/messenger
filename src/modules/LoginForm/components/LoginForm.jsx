import React from "react"
import { Link } from "react-router-dom"

import { Form, Input } from "antd"
import { MailOutlined, LockOutlined } from "@ant-design/icons"
import { Button, Block } from "../../../components/index"
import validateField from "../../../utils/helpers/validateField"

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props

  return (
    <div>
      <div className="auth__top">
        <h2>Sign In to Messenger</h2>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={validateField("email", touched, errors)}
            help={!touched.email ? " " : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              placeholder="E-mail"
              prefix={<MailOutlined />}
              size="large"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateField("password", touched, errors)}
            hasFeedback
            onChange={handleChange}
            onBlur={handleBlur}
            help={!touched.password ? " " : errors.password}
          >
            <Input.Password
              id="password"
              type="password"
              placeholder="Password"
              prefix={<LockOutlined />}
              size="large"
              value={values.password}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Sign In
            </Button>
          </Form.Item>

          <Link className="auth__register-link" to="/register">
            Create an account
          </Link>
        </Form>
      </Block>
    </div>
  )
}

export default LoginForm
