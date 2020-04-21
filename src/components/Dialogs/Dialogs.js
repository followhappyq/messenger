import React from "react"
import orderBy from "lodash/orderBy"
import { Input } from "antd"

import "./Dialogs.scss"
import { DialogItem } from "../"

const Dialogs = ({
  items,
  userId,
  onSearch,
  inputValue,
  currentDialogId,
  onSelectDialog,
}) => (
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
        onSelect={onSelectDialog}
        key={item._id}
        isMe={item.user._id === userId}
        currentDialogId={currentDialogId}
        {...item}
      />
    ))}
  </div>
)

export default Dialogs
