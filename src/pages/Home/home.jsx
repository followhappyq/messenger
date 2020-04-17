import React from "react"

import "./home.scss"
//import Message from "../../components/Message/Message"
import { Dialogs } from "../../components/"

const Home = () => {
  return (
    <section className="home">
      <Dialogs
        userId={0}
        items={[
          {
            _id: "d583667ba83397298563a0cfgf25af133",
            text: "Lorem lorem lorem",
            created_at: new Date(1),
            user: {
              _id: "d583667ba83397298563a0acff25af133",
              login: "happyq",
              avatar: null,
            },
          },
          {
            _id: "d583667ba8339729856s3a0cff25af133",
            text: "Hello darkness my old friend",
            created_at: new Date(),
            user: {
              _id: "d583667ba83397298563a0cff25af133",
              login: "Rossi",
              avatar:
                "https://sun9-29.userapi.com/c851028/v851028465/6e5da/_5LJFute2So.jpg?ava=1",                
              isOnline: true
            },
          },
        ]}
      />
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
