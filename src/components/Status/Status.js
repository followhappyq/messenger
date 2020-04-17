import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./status.scss";

const Status = ({ online }) => (
  <div className={classNames("status", { "status--online" : online  })}>
    {online ? "online" : "offline"}
  </div>
)

Status.propTypes = {
  online: PropTypes.bool,
}

export default Status
