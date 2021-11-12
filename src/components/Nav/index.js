import React from 'react'
import { NavContainer, Navoffset, NavTop, NavTitle, NavLInks, NavLink, NavLinka, NavBottom, NavDesc, } from './navElements'
// importing styled components
import PDF from '../../assets/files/MichaelGroberman_Resume.pdf';

const Nav = () => {
    return (<>
        <NavContainer>
            <NavTop>
                <NavTitle>Micheal Groberman</NavTitle>
                <NavLInks>

                    <NavLink to="/" >
                        About Me
                    </NavLink>

                    <NavLink to="/projects" >
                        Projects
                    </NavLink>

                    <NavLink to="/Contact" >
                        Contact Me
                    </NavLink>
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
