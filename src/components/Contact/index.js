import React from 'react'
import { Sectioncontainer, SectionTitle, SectionContent } from '../sharedElements'
import { ContactLinks, ContactLink } from './contactElements'
import phone from '../../assets/icons/phone-call.png'
import email from '../../assets/icons/email-address.png'
import linkedin from '../../assets/icons/linkedin-square-color.png'
import github from '../../assets/icons/github.png'
import resume from '../../assets/icons/resume-cv.png'
import PDF from '../../assets/files/MichaelGroberman_Resume.pdf';

const Contact = () => {
    return (
        <Sectioncontainer id="Contact">
            <SectionTitle>Contact Me</SectionTitle>
            <SectionContent>
                <ContactLinks>
                    <ContactLink href="tel:12016744074" background={phone}></ContactLink>
                    <ContactLink href="mailto:michael.groberman@me.com" background={email}></ContactLink>
                    <ContactLink href="https://github.com/MichaelAdamGroberman" background={github} target='_blank'></ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/michael-adam-groberman" background={linkedin} target='_blank'></ContactLink>
                    <ContactLink href={PDF} target="_blank" background={resume} ></ContactLink>
                </ContactLinks>
            </SectionContent>

        </Sectioncontainer>
    )
}

export default Contact
