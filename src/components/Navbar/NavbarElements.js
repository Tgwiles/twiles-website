import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: #2E5EAA;
    display: flex; 
    justify-content: center; 
    font-size: 1rem; 
    position: sticky; 
    top: 0; 
    z-index: 10; 

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    height: 80px; 
    z-index: 1; 
    width: 100%;
    padding: 0 24px; 
    max-width: 1100px; 
`

export const NavLogo = styled(LinkR)`
    color: #D8E4FF; 
    justify-self: flex-start; 
    padding-top: 20px; 
    cursor: pointer;
    font-size: 1.5rem; 
    display: flex; 
    align-items: 24px; 
    font-weight: bold; 
    text-decoration: none; 

    &:hover {
        color: black;
    }

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 5px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
    }

    &:hover:after{
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

