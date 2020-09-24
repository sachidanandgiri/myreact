import React, { Component } from 'react'
// Stateful/Smart/Container Class Component
// Complex UI logic
// Provide lifecycle hooks
class Sidebar extends Component{
    render(){
        return (
            <div>
                <h2>Welcome {this.props.name}, You are a {this.props.gender} </h2>
            </div>
        )
    }
}
export default Sidebar