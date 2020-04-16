import React from "react"

import "./home.scss"
//import Message from "../../components/Message/Message"
import DialogItem from "../../components/DialogItem/DialogItem"

const Home = () => {
  return (
    <section className="home">
      <div className="dialogs">
        <DialogItem
          user={{
            login: "happyq",
            isOnline: true,
          }}
          unreaded={0}
        />
        <DialogItem
          user={{
            login: "happyq",
            isOnline: true,
          }}
          unreaded={0}
        />
        <DialogItem
          user={{
            login: "happyq",
            isOnline: true,
          }}
          unreaded={0}
        />
      </div>

      {/* <Dialog items={[
        {
          user: {
            login: "happyq",
            avatar: null
          },
          message: {
            text: "Lorem lorem lorem",
            isReaded: false,
            created_at: new Date()
          }
        }
      ]} /> */}
      {/* <Message
        avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
        text="И казармы с боевым пропуском местами поменяли"
        date="Wed Apr 15 2020 13:31:39"
        isMe={false}
        isReaded={false}
        attachments={[
          {
            filename: "filename.jpg",
            url: "https://source.unsplash.com/100x100/?random=1?nature,water",
          },
          {
            filename: "filename.jpg",
            url: "https://source.unsplash.com/100x100/?random=2?nature,water",
          },
          {
            filename: "filename.jpg",
            url: "https://source.unsplash.com/100x100/?random=3?nature,water",
          },
        ]}
      />
      <Message
        avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
        text="Hello,world"
        date="Wed Apr 15 2020 13:34:39"
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
        isTyping
      />
      <Message
        avatar="https://sun9-41.userapi.com/c636828/v636828900/307b3/mUX28LPdDk4.jpg?ava=1"
        attachments={[
          {
            filename: "filename.jpg",
            url: "https://source.unsplash.com/100x100/?random=1?nature,water",
          },
        ]}
      /> */}
    </section>
  )
}

export default Home
