import React from 'react'
import spinner from '../img/spinner.gif'

const Spinner = () => {
    return (
        <img
            src={spinner} 
            style={{
                width: '12.5em',
                margin: 'auto',
                display: 'block'
            }}
            alt='Loading'
        />
    )
}

export default Spinner
