import React from 'react'

const About = props => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            {id: 'name', className: 'name'},
            props.name +' has nick name ' + props.nickName
        )
    )
}

export default About