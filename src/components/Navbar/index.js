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
                        <StyledLink to="/projects" {...props.location.pathname === "/projects" ? "active" : ""}>
                            Projects
                        </StyledLink>
                        <StyledLink to="/contact" {...props.location.pathname === "/contact" ? "active" : ""}>
                            Contact
                        </StyledLink>                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/projects'>Projects</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default withRouter(Navbar)
