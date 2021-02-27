import React from 'react'

class Message extends React.Component{
  constructor(){
    super()
    this.state = {
      message: "Guest user?",
      text: 'Please Subscribe',
      style:'Unsub'
    }
  }
  changeMessage(){
    this.setState({
      message: 'Thank you for subscribing',
      text: 'Subscribed',
      style:'Sub'
    })
  }
  render() {
    return(
      <div className="Message">
        <h2>{this.state.message}</h2>
        <button className={this.state.style} onClick={() => this.changeMessage()}>{this.state.text}</button>
      </div>
    )
  }
}
export default Message