import React from 'react'

// Props are immutable/can't be changed within the component
const About = props => {
    const {name, nickName} = props
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            {id: 'name', className: 'name'},
            // props.name +' has nick name ' + props.nickName
            name +' has nick name ' + nickName
        )
    )
}

export default About