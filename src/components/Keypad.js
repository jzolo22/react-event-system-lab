import { render } from 'enzyme'
// Code Keypad Component Here

import React from 'react'

// function Keypad() {
//     return (
//         <input type="password" />
//     )
// }

class Keypad extends React.Component {

    handleKeypress = () => {
        console.log('Entering password...')
    }


    render() {
        return (
            <input onKeyUp={this.handleKeypress} type="password" />
        )
    }
}

export default Keypad