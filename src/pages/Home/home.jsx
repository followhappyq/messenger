import React from "react"
import { EllipsisOutlined } from "@ant-design/icons"

import "./home.scss"
import { Messages, ChatInput, Status, Sidebar } from "../../containers/"

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
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
