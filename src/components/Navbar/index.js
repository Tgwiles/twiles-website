import React from 'react'
import { withRouter } from 'react-router-dom'
import {
    Nav,
    NavbarContainer,
    NavLogo
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Home</NavLogo>
                    <NavLogo to="/about">About</NavLogo>
                    <NavLogo to='/contact'>Contact</NavLogo>
                </NavbarContainer>
            </Nav>   
        </>
    )
}

export default withRouter(Navbar)
