import React from "react"
import orderBy from "lodash/orderBy"

import "./Dialogs.scss"
import { DialogItem } from "../"

const Dialogs = ({ items, userId, onSearch }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
      <DialogItem
        key={item._id}
        user={item.user}
        message={item}
        unread={0}
        isMe={item.user._id === userId}
      />
    ))}
  </div>
)

export default Dialogs
