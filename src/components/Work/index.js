import React from 'react'
import { Sectioncontainer, SectionTitle, SectionContent } from '../sharedElements'
import { ProjectHeading, ProjectText, ProjectLink, ProjectCard, ProjectDesc, ProjectsContainer } from './workElements'
import vegitaite from '../../assets/images/vegitate.png'
import horiseon from '../../assets/images/horiseon.png'
import PGenerator from '../../assets/images/PasswordGenerator.png'
import placeholder from '../../assets/images/placeholder.png'
import weather from '../../assets/images/WeatherDash.png'
const Work = () => {

    return (
        <Sectioncontainer>
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
                <ProjectsContainer>
                    <ProjectCard background={vegitaite}>
                        <ProjectDesc >

                            <ProjectHeading>test</ProjectHeading>
                            <ProjectText>test</ProjectText>
                            <ProjectLink href="">test</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={horiseon}>
                        <ProjectDesc >
                            <ProjectHeading>test</ProjectHeading>
                            <ProjectText>test</ProjectText>
                            <ProjectLink href="">test</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={PGenerator}>
                        <ProjectDesc >
                            <ProjectHeading>test</ProjectHeading>
                            <ProjectText>test</ProjectText>
                            <ProjectLink href="">test</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={weather}>
                        <ProjectDesc >
                            <ProjectHeading>test</ProjectHeading>
                            <ProjectText>test</ProjectText>
                            <ProjectLink href="">test</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                    <ProjectCard background={placeholder}>
                        <ProjectDesc >
                            <ProjectHeading>test</ProjectHeading>
                            <ProjectText>test</ProjectText>
                            <ProjectLink href="">test</ProjectLink>

                        </ProjectDesc>
                    </ProjectCard>
                </ProjectsContainer>
            </SectionContent>
        </Sectioncontainer>
    )
}

export default Work
