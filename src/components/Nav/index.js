import React from 'react'
import { NavContainer, NavTop, NavTitle, NavLInks, NavLinka, NavLink, NavBottom, NavDesc, } from './navElements'
// importing styled components
import PDF from '../../assets/files/MichaelGroberman_Resume.pdf';

const Nav = () => {
    return (
        <NavContainer>
            <NavTop>
                <NavTitle>Micheal Groberman</NavTitle>
                <NavLInks>

                    <NavLink
                    
                        activeClass="active"
                        to="About"
                        // targets component with id of "about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        About Me
                    </NavLink>

                    <NavLink
                        activeClass="active"
                        to="Work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Work
                    </NavLink>

                    <NavLink
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Contact Me
                    </NavLink>
                    <NavLinka href={PDF} target="_blank">Resume</NavLinka>

                </NavLInks>
            </NavTop>
            <NavBottom>
                <NavDesc>Full-Stack Developer</NavDesc>
            </NavBottom>

        </NavContainer>
    )
}

export default Nav
