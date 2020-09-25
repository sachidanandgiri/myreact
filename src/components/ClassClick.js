
import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Button clicked by class handler');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        )
    }
}

export default ClassClick
