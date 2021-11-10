import styled from "styled-components";


export const ProjectsContainer = styled.section`
display:flex;
flex-wrap:wrap;
gap:20px;
align-items:center;
justify-content:center;
margin-left:20px;`

export const ProjectCard = styled.section`
background-image: url(${({ background }) => background});
background-size: cover;
width: 300px;
height: 300px;
border: 2px solid;
margin-bottom: 30px;
`

export const ProjectDesc = styled.section`
background-color: black;
margin-left: 20%;
width:60%;
height:100%;
opacity:20%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-between;

&:hover{
    transition: 0.5 ease-in-out;
    opacity:90%;
    cursor:default;
}
`
export const ProjectHeading = styled.h3`
color:#73fc03;
`
export const ProjectText = styled.p`
color:#03dbfc;
`

export const ProjectLink = styled.a`
color:#c2fc03;
background-color: #a5c9c9;
width: 50px;
padding:5px;
margin-bottom:5px; 

&:hover{
    background-color: #bdbb99;
    color:#542a2a;
    transition: 0.5 ease-in-out;
    opacity:90%;
    cursor:pointer;
}
`