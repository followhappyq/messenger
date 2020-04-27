import React from "react"
import { Form, Input } from "antd"

import validateField from "../../utils/helpers/validateField"

const FormField = ({
  name,
  placeholder,
  touched,
  errors,
  handleChange,
  handleBlur,
  values,
  prefix,
  type,
}) => {
  return (
    <Form.Item
      validateStatus={validateField(name, touched, errors)}
      hasFeedback
      onChange={handleChange}
      onBlur={handleBlur}
      help={!touched[name] ? " " : errors[name]}
    >
      <Input
        id={name}
        placeholder={placeholder}
        prefix={prefix}
        size="large"
        value={values[name]}
        type={type}
      />
    </Form.Item>
  )
}

export default FormField
