import React, { useEffect } from "react"
import { withRouter } from "react-router"
import { connect } from "react-redux"

import { EllipsisOutlined } from "@ant-design/icons"

import { dialogsActions } from "../../redux/actions"
import "./home.scss"
import { Messages, ChatInput, Status, Sidebar } from "../../containers/"

const Home = (props) => {
  const { setCurrentDialogId } = props

  useEffect(() => {
    const {
      location: { pathname },
    } = props
    const dialogId = pathname.split("/").pop()
    setCurrentDialogId(dialogId)
    // eslint-disable-next-line
  }, [props.location.pathname])

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

export default withRouter(
  connect(({ user }) => ({ user: user.data }), dialogsActions)(Home)
)
