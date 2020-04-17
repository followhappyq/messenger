import React from "react"
import PropTypes from "prop-types"

import "./Avatar.scss"
import { generateAvatarFromHash } from "../../utils/helpers/helpers"

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img src={user.avatar} alt="avatar" />
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id)
    const firstChar = user.login[0]
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%)`,
        }}
        className="avatar avatar-symbol"
      >
        {firstChar}
      </div>
    )
  }
}

Avatar.PropTypes = {
  className: PropTypes.string,
}

export default Avatar
