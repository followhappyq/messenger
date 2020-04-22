import React from "react"
import { EllipsisOutlined, MenuOutlined } from "@ant-design/icons"

import "./home.scss"
import { Status, ChatInput } from "../../components/"
import { Dialogs, Messages } from "../../containers/"

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
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">happyq</b>
              <div className="chat__dialog-header-status">
                <Status online={true} />
              </div>
            </div>
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
