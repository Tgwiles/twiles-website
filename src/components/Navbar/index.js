import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, withRouter } from 'react-router-dom'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    //NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Thomas</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <li
                                class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </NavItem>
                        <NavItem>
                            <li
                                class={`nav-item  ${props.location.pathname === "/projects" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/projects">
                                    Projects
                                </Link>
                            </li>
                        </NavItem>
                        <NavItem>
                            <li
                                class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </NavItem>
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
