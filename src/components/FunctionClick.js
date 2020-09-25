import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button is clicked');
    }
    return (
        <div>
            {/* This will not work as event handler if we add the paranthesis after the handler name */}
            {/* <button onClick={clickHandler()}>Click Me</button>   In this button is shown already clicked  */}
            <button onClick={clickHandler}>Click Me</button>            
        </div>
    )
}

export default FunctionClick
