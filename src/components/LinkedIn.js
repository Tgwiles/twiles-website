import React from 'react';

// This is a state-less component. Doesn't useState(). Usually have these
// Strongly recommended to use this syntax when making components
const LinkedInLink = () => {
    
    return(
        <div className='App'>
            <a
                className="App-link"
                href="https://www.linkedin.com/in/tgwiles/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn Profile
            </a>
        </div>
    )
};

export default LinkedInLink;

