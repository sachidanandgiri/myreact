import React, { Component } from 'react'
// There are four approach to bind this keyword to event handler
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }

        // this.stateHandler = this.stateHandler.bind(this)
    }
    
    // stateHandler(){
    //     this.setState({
    //         message: 'Bye'
    //     })
    // }

    stateHandler = () =>{
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.stateHandler.bind(this)}>Click Once</button>          */}
                {/* <button onClick={()=>this.stateHandler()}>Click Once</button>          */}
                <button onClick={this.stateHandler}>Click Once</button>         

            </div>
        )
    }
}

export default EventBind
