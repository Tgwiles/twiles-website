import styled from 'styled-components'

export const ContactContainer = styled.div`
    background-color: #D8E4FF; // For unsupported browsers
    height: 100vh; 
`

export const ContactPanel = styled.div`
    display: flex; 
    width: 50%;
    margin-left: 33%; 
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

    animation: fade 1s ease-out; 
    @keyframes fade {
        0% {
            opacity: 0;
        }

        from {
            transform: translate3d(0, 30px, 0)
        }
        to {
            transform: translate3d(0,0,0)
        }

    }
`

export const ContactText = styled.p`
    color: #05386B; 
    font-size: 16px; 
    line-height: 16px; 
    font-weight: 700; 
    padding-top: 50px; 
    letter-spacing: 1.4px; 
    text-transform: uppercase; 
    text-align: center; 
`
export const ContactLink = styled.a``

export const ContactImg = styled.img`
    height: 70%;
    width: 50%; 
    margin: 0 0 10px 0; 
    padding-top: 40px;
    transition: transform .5s; 

    :hover {
        transform: scale(1.1); 
    }
`