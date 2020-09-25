import React, { Component } from 'react'
// Conditional statements
class UserGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // let message 
        // 1st Approach
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Back to Home</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }
        //2nd Approach
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Back to Home</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message
        // 3rd Approach
        // return this.state.isLoggedIn ?
        // (<div>Welcome Back to Home</div>) :
        // (<div>Welcome Guest</div>)
        // 4th Approach
        return this.state.isLoggedIn && <div>Welcome Back to Home</div>
    }
}

export default UserGreet
