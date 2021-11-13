import React from 'react'
import { useState } from 'react';
import { NavContainer, NavLinkActive, Navoffset, NavTop, NavTitle, NavLInks, NavLink, NavLinka, NavBottom, NavDesc, } from './navElements'
// importing styled components
import PDF from '../../assets/files/MichaelGroberman_Resume.pdf';

const Nav = () => {
    const [active, setActive] = useState("about");
    const handleactive = (e, string) => {
        setActive(string)
    }
    return (<>
        <NavContainer>
            <NavTop>
                <NavTitle>Micheal Groberman</NavTitle>
                <NavLInks>
                    {(active === "about") ?
                        <NavLinkActive>About Me</NavLinkActive> :
                        <NavLink to="/" onClick={(e) => handleactive(e, "about")}>
                            About Me
                        </NavLink>}

                    {(active === "projects") ?
                        <NavLinkActive>Projects</NavLinkActive> :
                        <NavLink to="/projects" onClick={(e) => handleactive(e, "projects")}>
                            Projects
                        </NavLink>}

                    {(active === "contact") ?
                        <NavLinkActive>
                            Contact Me
                        </NavLinkActive> :
                        <NavLink to="/Contact" onClick={(e) => handleactive(e, "contact")}>
                            Contact Me
                        </NavLink>}

                    <NavLinka href={PDF} target="_blank">Resume</NavLinka>

                </NavLInks>
            </NavTop>
            <Navoffset />
            <NavBottom>
                <NavDesc>Full-Stack Developer</NavDesc>
            </NavBottom>
        </NavContainer>
    </>
    )
}

export default Nav
