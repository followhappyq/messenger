import React from "react";
import { LoginForm, RegisterForm } from "../../modules/modules";
import { Route } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="autn__content">
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </div>
    </section>
  );
};

export default Auth;
