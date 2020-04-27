import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { Auth, Home } from "./pages/pages"

const App = (props) => {
  const { isAuth } = props
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path={["/im"]} component={Home} />
      {isAuth ? <Redirect to="/im" /> : <Redirect to="/login" />}
    </div>
  )
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App)
