import React, { useState } from "react"
import { Input } from "antd"
import { EllipsisOutlined, MenuOutlined } from "@ant-design/icons"

import "./home.scss"
import { Message, Status, ChatInput } from "../../components/"
import { Dialogs } from "../../containers/"

const Home = () => {
  const [inputValue, setState] = useState("")

  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <MenuOutlined style={{ fontSize: 17 }} />
            <div className="chat__sidebar-header-search">
              <Input.Search
                placeholder="Search"
                onChange={(e) => {
                  setState(e.target.value)
                }}
                value={inputValue}
              />
            </div>
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userId={0}
              inputValue={inputValue}
              items={[
                {
                  _id: "5e99b6051f6cdd8549ad74b7",
                  text:
                    "Irure et cupidatat quis aliquip. Commodo laborum ex aute tempor minim pariatur sint sit ullamco proident Lorem qui. Culpa adipisicing et aliqua amet.",
                  created_at:
                    "Mon Aug 26 1991 15:22:42 GMT+0200 (Центральная Европа, летнее время)",
                  user: {
                    _id: "5e99b6052385fa9303708958",
                    login: "Wilcox Kramer",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b6053a25b1eb9b9a6b28",
                  text:
                    "Aliqua tempor sunt sint mollit commodo anim nisi magna Lorem sint in reprehenderit mollit aliquip. Exercitation aliqua proident ad dolore cupidatat. Proident dolore nisi adipisicing id officia dolore ullamco.",
                  created_at:
                    "Sun Jun 17 1973 20:41:09 GMT+0100 (Центральная Европа, стандартное время)",
                  user: {
                    _id: "5e99b6054c2a730998dffe31",
                    login: "Lane Richmond",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b605c1bb7e1bb5aebb81",
                  text:
                    "Enim adipisicing eiusmod in sunt non ullamco enim do magna in esse sit. Dolor mollit Lorem dolore occaecat cillum sit aute. Laboris sint laboris mollit sit.",
                  created_at:
                    "Sat Feb 04 1989 07:14:33 GMT+0100 (Центральная Европа, стандартное время)",
                  user: {
                    _id: "5e99b605bba70121347961d3",
                    login: "Vaughan Frederick",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b6058ad9685b6f40daab",
                  text:
                    "Dolor tempor veniam laborum reprehenderit enim non quis proident minim non qui. Lorem non incididunt eiusmod non aliquip cillum. In incididunt officia in dolor enim sunt laborum duis occaecat dolore labore.",
                  created_at:
                    "Sun Mar 08 2020 22:18:11 GMT+0100 (Центральная Европа, стандартное время)",
                  user: {
                    _id: "5e99b605d181d0b888082356",
                    login: "Salazar Bray",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b605c112928bea25ec69",
                  text:
                    "Sit ea ipsum duis est aliqua ad elit sint anim. Nisi fugiat amet sunt proident aute laboris ea eiusmod sunt anim ex enim occaecat mollit. Incididunt Lorem exercitation officia nisi occaecat officia occaecat.",
                  created_at:
                    "Tue Jul 22 1986 12:21:40 GMT+0200 (Центральная Европа, летнее время)",
                  user: {
                    _id: "5e99b60546ba9661fdba9552",
                    login: "Dorthy Craft",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b605cae38ce07bae2b78",
                  text:
                    "Veniam in do cillum fugiat excepteur dolore incididunt. Magna fugiat incididunt enim aliquip exercitation duis id culpa. Amet eiusmod est excepteur adipisicing amet laborum pariatur.",
                  created_at:
                    "Sun Feb 11 1996 08:08:24 GMT+0100 (Центральная Европа, стандартное время)",
                  user: {
                    _id: "5e99b6053f3ac3074cba17d7",
                    login: "May Gross",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b605610347aecc29aacb",
                  text:
                    "Ut sit anim laboris proident consequat aliqua incididunt duis cillum eu sint anim eu. Laboris tempor aliquip ex sit Lorem elit labore nulla elit. Minim consequat veniam nulla adipisicing incididunt eiusmod aute nostrud commodo.",
                  created_at:
                    "Mon Aug 07 2006 15:42:24 GMT+0200 (Центральная Европа, летнее время)",
                  user: {
                    _id: "5e99b605dcd0b2533137d0cf",
                    login: "Yvonne Sharpe",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b60537b660355571ff42",
                  text:
                    "Est tempor Lorem non dolor tempor cillum eiusmod Lorem. Pariatur aute ea nostrud do aute. Irure ex qui culpa labore dolor duis occaecat quis.",
                  created_at:
                    "Sat May 25 1985 08:46:23 GMT+0200 (Центральная Европа, летнее время)",
                  user: {
                    _id: "5e99b605bc4330b4291e4eef",
                    login: "Frieda Newman",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b6051dbc34e25cfd5624",
                  text:
                    "Labore aliqua elit enim consectetur veniam nisi Lorem et amet laborum sint laborum aute aliqua. Consectetur aliquip ad amet nisi labore proident cillum officia proident. Aliquip aliqua laborum Lorem aute et.",
                  created_at:
                    "Tue Feb 26 2002 17:49:06 GMT+0100 (Центральная Европа, стандартное время)",
                  user: {
                    _id: "5e99b605a7d08125d0ef2506",
                    login: "Morgan Miles",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b6053da0c70fee18ebf3",
                  text:
                    "Qui irure amet aliqua ad veniam non quis qui laboris. Et non quis nulla quis. Exercitation sint ea elit velit eiusmod et amet sunt fugiat anim.",
                  created_at:
                    "Fri Jan 07 2011 04:14:58 GMT+0100 (Центральная Европа, стандартное время)",
                  user: {
                    _id: "5e99b6056cc6b0d27ef948d1",
                    login: "Wanda Villarreal",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b60588aed85000193730",
                  text:
                    "Anim laborum laboris ullamco mollit. Dolore amet dolor dolor amet. Est exercitation dolore enim ut dolor ullamco nostrud ad qui tempor ad et duis aute.",
                  created_at:
                    "Mon Aug 17 2009 14:40:34 GMT+0200 (Центральная Европа, летнее время)",
                  user: {
                    _id: "5e99b6056fb34f38413d94c9",
                    login: "Keisha Prince",
                    avatar: null,
                  },
                },
                {
                  _id: "5e99b605a916d204c5d489b4",
                  text:
                    "Voluptate enim sunt cillum aliqua deserunt. Nostrud ad nisi officia cupidatat veniam consequat mollit ut qui nostrud. Consequat culpa velit reprehenderit magna.",
                  created_at:
                    "Tue Jun 04 1974 02:38:09 GMT+0100 (Центральная Европа, стандартное время)",
                  user: {
                    _id: "5e99b60554d5cc09abf28f05",
                    login: "Maryanne Madden",
                    avatar: null,
                  },
                },
              ]}
            />
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
            />
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
            />
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
