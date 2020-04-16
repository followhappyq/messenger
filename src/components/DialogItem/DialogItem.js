import React from "react"
import classNames from "classnames"

import "./DialogItem.scss"
import { Time, IconReaded } from "../"

const getAvatar = (avatar) => {
  if (avatar) {
    return <img src={avatar} alt="avatar" />
  } else {
    //make avatar
  }
}

const DialogItem = ({ user, message, unreaded }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item-online": user.isOnline,
    })}
  >
    <div className="dialogs__item-avatar">
      {/*  <img src={user.avatar} alt={`${user.login} avatar`}/> */}
      {getAvatar(
        "https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Login </b>
        <span>
          {/* <Time date={new Date()} /> */}
          13:30
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>Ходи, ходи над землёй, воу Ходи, ходи над землёй, воу</p>
        <IconReaded isMe={true} isReaded={true} />
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">{unreaded}</div>
        )}
      </div>
    </div>
  </div>
)

export default DialogItem
