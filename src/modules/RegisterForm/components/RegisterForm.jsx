import React from "react"

import { Link } from "react-router-dom"

import { Form, Input } from "antd"
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  MailTwoTone,
} from "@ant-design/icons"
import { Button, Block } from "../../../components/index"
import validateField from "../../../utils/helpers/validateField"

const success = false

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    dirty,
    isValid,
  } = props

  return (
    <div>
      <div className="auth__top">
        <h2>Registration</h2>
      </div>
      <Block>
        {!success ? (
          <Form
            onSubmit={handleSubmit}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item>
              <Input
                placeholder="Login"
                prefix={<UserOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("email", touched, errors)}
              hasFeedback
              onChange={handleChange}
              onBlur={handleBlur}
              help={!touched.email ? " " : errors.email}
            >
              <Input
                id="email"
                placeholder="E-mail"
                prefix={<MailOutlined />}
                size="large"
                value={values.email}
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
              <Input.Password
                placeholder="Confirm Password"
                prefix={<LockOutlined />}
                size="large"
              />
            </Form.Item>

            <Form.Item>
              {dirty && !isValid && <span>Error</span>}
              <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                size="large"
              >
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
  )
}

export default RegisterForm
