import React, { useEffect, useState } from "react"
import { Result, Button } from "antd"

import { userApi } from "../../../utils/api"
import { Block } from "../../../components/index"

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        message: "E-mail has been confirmed.",
      }
    } else {
      return {
        status: "error",
        message: "Something went wrong.",
      }
    }
  } else {
    return {
      status: "success",
      message:
        "Registration has been successfully completed. Check your e-mail address to verify.",
    }
  }
}

const CheckEmailInfo = ({ location, history }) => {
  const [verified, setVerified] = useState(false)
  const hash = location.search.split("hash=")[1]
  const info = renderTextInfo(hash, verified)

  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true)
        }
      })
    }
  })

  return (
    <Block>
      <Result
        status={info.status}
        title={info.status === "success" ? "Ready!" : "Error!"}
        subTitle={info.message}
        extra={
          info.status === "success" &&
          verified && (
            <Button type="primary" onClick={() => history.push("/signin")}>
              Sign In
            </Button>
          )
        }
      />
    </Block>
  )
}

export default CheckEmailInfo
