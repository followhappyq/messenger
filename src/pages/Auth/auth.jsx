import React from "react";
import { LoginForm } from "../../modules/modules";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="autn__content">
        <LoginForm />
      </div>
    </section>
  );
};

export default Auth;
