import React from 'react'
import { FaBars } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    StyledLink,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

//Errors to do with invalid attribute name, see: https://styled-components.com/docs/basics#passed-props
const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Home</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <StyledLink to="/about" {...props.location.pathname === "/about" ? "active" : ""}>
                            About
                        </StyledLink>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/contact'>Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default withRouter(Navbar)
