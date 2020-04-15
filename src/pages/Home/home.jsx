import React from "react"

import "./home.scss"
import Message from "../../components/Message/Message"

const Home = () => {
  return (
    <section className="home">
      <Message
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
    </section>
  )
}

export default Home
