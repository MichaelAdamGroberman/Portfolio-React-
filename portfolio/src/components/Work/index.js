import React from 'react'
import { Sectioncontainer, SectionTitle, SectionContent } from '../sharedElements'
import { ProjectHeading, ProjectText, ProjectLink, ProjectCard, ProjectDesc, ProjectsContainer } from './workElements'
import vegitaite from '../../assets/images/vegitate.png'
import horiseon from '../../assets/images/horiseon.png'
import PGenerator from '../../assets/images/PasswordGenerator.png'
import placeholder from '../../assets/images/placeholder.png'
import weather from '../../assets/images/WeatherDash.png'
// importing images 
const Work = () => {

    return (
        <Sectioncontainer id="Work">
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
                <ProjectsContainer>
                    <ProjectCard background={vegitaite}>
                        {/* passing in img as prop to component */}
                        <ProjectDesc >

                            <ProjectHeading>Vegitate</ProjectHeading>
                            <ProjectText> A movie trailer and preview webapp</ProjectText>
                            <ProjectLink href="https://stephenwong-git.github.io/Vegitate/" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={horiseon}>
                        <ProjectDesc >
                            <ProjectHeading>Horiseon </ProjectHeading>
                            <ProjectText>Horiseon, a company specializing in online marketing would like their website to be optimized, and for some of the code to be fixed.</ProjectText>
                            <ProjectLink href="https://github.com/MichaelAdamGroberman/Horiseon-Code-Refactoring" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={PGenerator}>
                        <ProjectDesc >
                            <ProjectHeading>Secure Password Generator</ProjectHeading>
                            <ProjectText>A password is randomly generated based on set criteria that the user provides when prompted via js alerts/prompts.</ProjectText>
                            <ProjectLink href="https://github.com/MichaelAdamGroberman/Password-Generator" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={weather}>
                        <ProjectDesc >
                            <ProjectHeading>Weather-Dashboard</ProjectHeading>
                            <ProjectText>Our assignment was to create a weather dashboard that leverage a 3rd party server api to propigate our web application with relevant data.</ProjectText>
                            <ProjectLink href="" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={placeholder}>
                        <ProjectDesc >
                            <ProjectHeading>Placeholder</ProjectHeading>
                            <ProjectText>Placeholder</ProjectText>
                            <ProjectLink href="" target="_blank">Go to project</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                </ProjectsContainer>
            </SectionContent>
        </Sectioncontainer>
    )
}

export default Work
