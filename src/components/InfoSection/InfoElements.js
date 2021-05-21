import styled from 'styled-components'

export const InfoContainer = styled.div`
    background-color: #D8E4FF; // For unsupported browsers
    height: 100vh;
    width: auto;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: 400px; 
    width: 100%; 
    max-width: 90%;  

    justify-content: center; 

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

export const InfoRow = styled.div`
    display: grid; 
    grid-auto-columns: minmax(auto, 1fr); 
    align-items: center; 
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px; 
    grid-area: col1; 
`

export const Column2 = styled.div`
    margin-bottom: 15px; 
    grid-area: col2; 
`

export const TextWrapper = styled.div`
    max-width: 540px; 
    padding-top: 0;
`

export const Heading = styled.h1`
    margin-bottom: 24px; 
    margin-top: 0px;
    font-size: 36px; 
    float: right;
    font-weight: 600; 
    color: #05386B; 
    
    @media screen and (max-width: 480px) {
        font-size: 32px; 
    }
`