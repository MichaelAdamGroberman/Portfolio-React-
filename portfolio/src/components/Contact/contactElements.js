import styled from "styled-components";
export const ContactLinks = styled.section`
display:flex;
justify-content:space-around;
align-items:center;
height:100%`

export const ContactLink = styled.a`
background-image: url(${({ background }) => background});
background-size: cover;
min-width: 100px;
min-height: 100px;
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