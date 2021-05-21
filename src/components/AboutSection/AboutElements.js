import styled from 'styled-components'

export const AboutContainer = styled.div`
    background-color: #D8E4FF; // For unsupported browsers
    height: 100vh; 
`

export const AboutPanel = styled.div`
    display: flex; 
    width: 50%;
    padding-top: 5%;
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
    color: #05386B; 
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

export const GridContainer = styled.div`
    display:grid;
`

export const GridRow = styled.div`
    height: 100px;
`

export const InfoSquare = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 25px;
    
    background-color: #2E5EAA;
    transition:  transform 0.1s;
    float: left; 

    &:hover {
        transform: scale(1.25);
        transition:  transform 0.25s;
    }
`

export const SquareText = styled.div`
    text-align: center;
    color: #D8E4FF;
    padding-top: 40px;
    align-items: center;
`