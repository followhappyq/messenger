import React from "react"
import orderBy from "lodash/orderBy"
import { Input } from "antd"

import "./Dialogs.scss"
import { DialogItem } from "../"

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
      <DialogItem
        key={item._id}
        isMe={item.author._id === userId}
        currentDialogId={currentDialogId}
        {...item}
      />
    ))}
  </div>
)

export default Dialogs
