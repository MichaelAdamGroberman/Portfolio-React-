import styled from "styled-components";
export const ProfileImage = styled.section`
background-image: url(${({ background }) => background});
width: 400px;
height:400px;
background-size: cover;
border-radius: 50%;
`