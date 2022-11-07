import React from 'react'

export default function OldChat(props) {
  return (
      <>
    {props.joined && (

  <div >
    <h2>Check Old Messages</h2>
    <form>
      <button onClick={props.checkOld}>{props.sta}</button>
    </form>
    <div >
    <div
  style={{
      overflow: "auto",
      width: "100%",
      height: 200,
      flexDirection: "column",
      justifyContent: "flex-start",
  }}>
      {props.showOld &&
        props.old &&
        props.old.map((msg) => (
          <div key={msg.id}>
            <p>
              [{msg?.split(":")[7]}:{msg?.split(":")[8]}]{" "}
              {msg?.split(":")[0]}: {msg?.split(":")[1]}
            </p>
          </div>
        ))}
    </div>
    </div>
  </div>
  )}
  </>
  )  
}
