import React from 'react'

const Image = (props) => {
    return (
        <div>
            <img src={props.src} width='250px' height='250px' alt={props.alt}/>
        </div>
    )
}

export default Image
