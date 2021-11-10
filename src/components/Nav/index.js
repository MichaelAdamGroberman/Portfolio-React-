import React from 'react'
import { NavContainer, NavTop, NavTitle, NavLInks, NavLink, NavBottom, NavDesc, } from './navElements'
const Nav = () => {
    return (
        <NavContainer>
            <NavTop>
                <NavTitle>Micheal Groberman</NavTitle>
                <NavLInks>
                    <NavLink to=''>About Me</NavLink>
                    <NavLink to=''>Work</NavLink>
                    <NavLink to=''>Contact Me</NavLink>
                    <NavLink to=''>Resume</NavLink>

                </NavLInks>
            </NavTop>
            <NavBottom>
                <NavDesc>Full-Stack Developer</NavDesc>
            </NavBottom>

        </NavContainer>
    )
}

export default Nav
