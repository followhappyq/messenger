import React from "react"
import { LoginForm, RegisterForm } from "../../modules/modules"
import { Route } from "react-router-dom"

import CheckInfo from "./components/CheckInfo"
import "./Auth.scss"

const Auth = () => {
  return (
    <section className="auth">
      <div className="autn__content">
        <Route exact path="/signin" component={LoginForm} />
        <Route exact path="/signup" component={RegisterForm} />
        <Route exact path="/signup/verify" component={CheckInfo} />
      </div>
    </section>
  )
}

export default Auth
