import { Link } from 'react-scroll'
import styled from 'styled-components'
import img from '../../assets/images/nyc_skyline.JPG'
export const NavContainer = styled.nav`
margin-top: 0;
width: 100%;
`
export const NavTop = styled.section`
background-color:#1d2022;
display: flex;
flex-direction: column;
margin: 0;
padding:0;

`

export const NavTitle = styled.h1`
font-weight: 900;
font-size: 30px;
color: #4a4848;
background-color:#44a8b8;
box-shadow: 0px 5px 3px 3px #44a8b8;
padding:7px;
`
export const NavLInks = styled.section`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
padding-bottom: 10px;;
`
export const NavLink = styled(Link)`
color: #44a8b8;
text-decoration: underline;
cursor:pointer;

&:hover{
    color:#ff4040;
    transition: 0.2 ease-in-out;
}

`
export const NavBottom = styled.section`
background-image: url(${img});
background-size: 100% 100%;
height: 180px;
display: flex;
align-items: center;
justify-content: center;
`

export const NavDesc = styled.h2`
color: #44a8b8;
background-color:#4a4848;
box-shadow: 5px 5px 3px 0px #44a8b8;
padding:7px;
`

