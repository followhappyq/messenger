import React  from "react"
import { EllipsisOutlined, MenuOutlined } from "@ant-design/icons"

import "./home.scss"
import { Message, Status, ChatInput } from "../../components/"
import { Dialogs } from "../../containers/"

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
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="И казармы с боевым пропуском местами поменяли"
              date="Wed Apr 15 2020 13:31:39"
              isMe={false}
              isReaded={false}
              attachments={[
                {
                  filename: "filename.jpg",
                  url:
                    "https://source.unsplash.com/100x100/?random=1?nature,water",
                },
                {
                  filename: "filename.jpg",
                  url:
                    "https://source.unsplash.com/100x100/?random=2?nature,water",
                },
                {
                  filename: "filename.jpg",
                  url:
                    "https://source.unsplash.com/100x100/?random=3?nature,water",
                },
              ]}
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="Hello,world"
              date="Wed Apr 15 2020 13:34:39"
              isMe={true}
              isReaded={false}
            />{/* 
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              isTyping
              isReaded
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              isReaded
              attachments={[
                {
                  filename: "filename.jpg",
                  url:
                    "https://source.unsplash.com/100x100/?random=1?nature,water",
                },
              ]}
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="И казармы с боевым пропуском местами поменяли"
              date="Wed Apr 15 2020 13:31:39"
              isMe={false}
              isReaded={false}
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="И казармы с боевым пропуском местами поменяли"
              date="Wed Apr 15 2020 13:31:39"
              isMe={false}
              isReaded={false}
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="И казармы с боевым пропуском местами поменяли"
              date="Wed Apr 15 2020 13:31:39"
              isMe={false}
              isReaded={false}
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="И казармы с боевым пропуском местами поменяли"
              date="Wed Apr 15 2020 13:31:39"
              isMe={false}
              isReaded={false}
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="И казармы с боевым пропуском местами поменяли"
              date="Wed Apr 15 2020 13:31:39"
              isMe={false}
              isReaded={false}
            />
            <Message
              avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
              text="И казармы с боевым пропуском местами поменяли"
              date="Wed Apr 15 2020 13:31:39"
              isMe={false}
              isReaded={false}
            /> */}
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
