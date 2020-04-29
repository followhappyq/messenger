import React from "react"
import { EllipsisOutlined, MenuOutlined } from "@ant-design/icons"

import "./home.scss"
import { Dialogs, Messages, ChatInput, Status } from "../../containers/"

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <MenuOutlined style={{ fontSize: 17 }} />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs userId={0} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <Status online />

            <EllipsisOutlined style={{ fontSize: 20 }} />
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
