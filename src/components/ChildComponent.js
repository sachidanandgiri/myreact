import React from 'react'
//Using props call parent method within the child component
function ChildComponent(props) {
    return (
        <div>
            {/* If we want to pass the parameter to the parent we should use the arrow function  */}
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
