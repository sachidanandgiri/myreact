import React, { Component } from 'react'

// Cannot set the state directly 
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementCounter(){
        // this.setState({
        //     count : this.state.count + 1
        // },() => console.log(this.state.count))
        // this.state.count = this.state.count + 1

        this.setState((prevState, props)=>({
            count: prevState.count + props.increment
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }

    render(){
        return(
            <div>
                Count - {this.state.count}
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
export default Counter