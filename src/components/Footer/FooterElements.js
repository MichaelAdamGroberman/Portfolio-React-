import styled from "styled-components";

export const ContactLinks = styled.section`
display:flex;
justify-content:center;
gap: 30px;
align-items:center;
height:100%;`

export const ContactLink = styled.a`
background-image: url(${({ background }) => background});
background-size: cover;
min-width: 50px;
min-height: 50px;
margin-bottom: 30px;
&:hover{
    transition: background-color 2s ;
    box-shadow: inset 0 0 0 100px rgba(125, 234, 236, 0.37);
    background-color: #f2fdfd;
    color:#c02222;
    transition: 0.5 ease-in-out;
    opacity:90%;
    cursor:pointer;
}

`
export const FooterContainer = styled.footer`
background-color: #1a1919;
width: 100%;
padding: 20px;
padding-top:50px;
`
export const FooterDesc = styled.p`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap:10px;
color: lightblue;`

export const FooterReactLogo = styled.p`
background-image: url(${({ React }) => React});
background-size: cover;
position: relative;
padding:11px;
padding-right:13px;`