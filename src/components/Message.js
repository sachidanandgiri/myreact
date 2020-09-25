import React, { Component } from 'react'

// state are mutable witin the component
class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Everyone!'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render(){
        const {message} = this.state
        return(
            <div>
                {/* <h1>{this.state.message}</h1> */}
                <h1>{message}</h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message