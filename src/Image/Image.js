import React from 'react';

// This is a state-less component. Doesn't useState(). Usually have these
// Strongly recommended to use this syntax when making components
const Image = () => {
    
    return(
        <div>
            <img src={'../profilepic.jpg'} width="750" height="750" alt="Profile Pic"/>
        </div>
    )
};

export default Image;


