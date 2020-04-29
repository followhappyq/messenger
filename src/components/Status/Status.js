import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./status.scss"

const Status = ({ online, login }) => (
  <div className="chat__dialog-header-center">
    <b className="chat__dialog-header-username">{login}</b>
    <div className="chat__dialog-header-status">
      <div className={classNames("status", { "status--online": online })}>
        {online ? "online" : "offline"}
      </div>
    </div>
  </div>
)

Status.propTypes = {
  online: PropTypes.bool,
}

export default Status
