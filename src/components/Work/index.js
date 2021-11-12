import React from 'react'
import { Sectioncontainer, SectionTitle, SectionContent } from '../sharedElements'
import { ProjectHeading, ProjectText, ProjectLink, ProjectCard, ProjectDesc, ProjectsContainer } from './workElements'
import vegitaite from '../../assets/images/vegitate.png'
import horiseon from '../../assets/images/horiseon.png'
import PGenerator from '../../assets/images/PasswordGenerator.png'
import Pawtime from '../../assets/images/pawTime.PNG'
import weather from '../../assets/images/WeatherDash.png'
import team from '../../assets/images/Team.png'
// importing images 
const Work = (props) => {
    return (
        <Sectioncontainer id="Work">
            <SectionTitle >Projects</SectionTitle>
            <SectionContent>
                <ProjectsContainer>
                    <ProjectCard background={vegitaite} role="img" aria-label="[Vegitate project screenshot]">
                        {/* passing in img as prop to component */}
                        <ProjectDesc >

                            <ProjectHeading>Vegitate</ProjectHeading>
                            <ProjectText> A movie trailer and preview webapp</ProjectText>
                            <ProjectLink href="https://stephenwong-git.github.io/Vegitate/" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={horiseon} role="img" aria-label="[horiseon project screenshot]">
                        <ProjectDesc >
                            <ProjectHeading>Horiseon </ProjectHeading>
                            <ProjectText>Horiseon, a company specializing in online marketing would like their website to be optimized, and for some of the code to be fixed.</ProjectText>
                            <ProjectLink href="https://github.com/MichaelAdamGroberman/Horiseon-Code-Refactoring" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={PGenerator} role="img" aria-label="[PGenerator project screenshot]">
                        <ProjectDesc >
                            <ProjectHeading>Secure Password Generator</ProjectHeading>
                            <ProjectText>A password is randomly generated based on set criteria that the user provides when prompted via js alerts/prompts.</ProjectText>
                            <ProjectLink href="https://github.com/MichaelAdamGroberman/Password-Generator" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={weather} role="img" aria-label="[weather project screenshot]">
                        <ProjectDesc >
                            <ProjectHeading>Weather-Dashboard</ProjectHeading>
                            <ProjectText>Our assignment was to create a weather dashboard that leverage a 3rd party server api to propigate our web application with relevant data.</ProjectText>
                            <ProjectLink href="https://github.com/MichaelAdamGroberman/Weather-Dashbaord" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={Pawtime} role="img" aria-label="[PawTime project screenshot]">
                        <ProjectDesc >
                            <ProjectHeading>PawTime</ProjectHeading>
                            <ProjectText>A web application that stores a personal profile for your pet(s). Each pet has their vaccinations, issues, appointments, etc logged.

                            </ProjectText>
                            <ProjectLink href="https://github.com/MichaelAdamGroberman/Team-Profile-Generator" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={team} role="img" aria-label="[Team-Profile-Generator project screenshot]">
                        <ProjectDesc >
                            <ProjectHeading>Team-Profile-Generator</ProjectHeading>
                            <ProjectText>This is a Node.js command-line application that takes in information about employees on a software engineering team via inquirer and CLI, then generates an HTML webpage that displays summaries for each person.</ProjectText>
                            <ProjectLink href="https://github.com/MichaelAdamGroberman/Team-Profile-Generator" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>


                </ProjectsContainer>
            </SectionContent>
        </Sectioncontainer>
    )
}

export default Work
