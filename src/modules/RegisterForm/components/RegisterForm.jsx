import React from "react"

import { Link } from "react-router-dom"

import { Form } from "antd"
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  MailTwoTone,
} from "@ant-design/icons"
import { Button, Block, FormField } from "../../../components/index"

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
    isSubmitting,
  } = props

  return (
    <div>
      <div className="auth__top">
        <h2>Registration\ Currently redirect isn't working</h2>
      </div>
      {console.log(success)}
      <Block>
        {!success ? (
          <Form
            onSubmit={handleSubmit}
            initialValues={{
              remember: true,
            }}
          >
            <FormField
              name="email"
              prefix={<MailOutlined />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              placeholder="E-mail"
            />
            <FormField
              name="login"
              prefix={<UserOutlined />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              placeholder="Login"
            />
            <FormField
              name="password"
              prefix={<LockOutlined />}
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              placeholder="Password"
            />
            <FormField
              name="password_2"
              prefix={<LockOutlined />}
              handleChange={handleChange}
              type="password"
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              placeholder="Confirm Password"
            />

            <Form.Item>
              {dirty && !isValid && <span>Error</span>}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="primary"
                htmlType="submit"
                size="large"
              >
                Register
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/signin">
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
