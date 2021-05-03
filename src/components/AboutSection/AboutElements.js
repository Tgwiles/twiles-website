import styled from 'styled-components'

export const AboutContainer = styled.div`
    background-color: #010606; // For unsupported browsers
    background-image: linear-gradient(#010606, #999b9b);
    height: 100vh; 
`

export const AboutPanel = styled.div`
    display: flex; 
    width: 50%;
    margin-left: 25%; 
    
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

export const AboutText = styled.p`
    color: #fff; 
    font-size: 16px; 
    line-height: 16px; 
    font-weight: 700; 
    padding-top: 50px; 
    letter-spacing: 1.4px; 
`

export const ResumeLink = styled.a``

export const ResumeImg = styled.img`
    height: 70%;
    width: 50%; 
    margin: 0 0 10px 0; 
    padding-top: 40px;
    margin-left: 100px; 
    transition: transform .5s; 

    :hover {
        transform: scale(1.1); 
    }
`

export const SkillsList = styled.ul`
    color: #fff; 
    font-size: 16px; 
    line-height: 16px; 
    font-weight: 700; 
    padding-top: 50px; 
    margin-left: auto; 
    margin-right: auto; 
    letter-spacing: 1.4px; 
`
export const ListItem = styled.li`
    padding-top: 10px; 
`