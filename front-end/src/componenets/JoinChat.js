import React from 'react'

export default function JoinChat(props) {
  return (
    <div> {!props.joined && (
        <div>
          <h1>Join Chat</h1>

          <form onSubmit={props.joinHandler}>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
      {props.joined && (
        <div>
          <h2>Hello {localStorage.getItem("name")} </h2>

          <form onSubmit={props.leaveHandler}>
            <button type="submit">Leave Chat</button>
          </form>
          <div >
          <div
          style={{
              overflow: "auto",
              width: "100%",
              height: 200,
              flexDirection: "column",
              justifyContent: "flex-start",
          }}
          >
            <h3>Activity</h3>
            {props.usersLogs.map((log) => (
              <p ref={props.bottomRef}>{log}</p>
            ))}
          </div>
          </div>
        </div>
      )}</div>
  )
}
