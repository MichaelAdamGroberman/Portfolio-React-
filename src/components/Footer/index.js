import React from 'react'
import { ContactLinks, ContactLink, FooterContainer, FooterDesc, FooterReactLogo } from './FooterElements'
import phone from '../../assets/icons/phone-call.png'
import email from '../../assets/icons/email-address.png'
import linkedin from '../../assets/icons/linkedin-square-color.png'
import github from '../../assets/icons/github.png'
import twitter from '../../assets/icons/twitter.png'
import resume from '../../assets/icons/resume-cv.png'
import PDF from '../../assets/files/MichaelGroberman_Resume.pdf';
import ReactLogo from '../../assets/icons/react-js.png'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterDesc>Page made with <FooterReactLogo React={ReactLogo} role="img" aria-label="[React Logo]" />
                by Michael Adam Groberman</FooterDesc>
            <ContactLinks>
                <ContactLink href="tel:12016744074" role="img" aria-label="[phone icon]" background={phone}></ContactLink>
                <ContactLink href="mailto:michael.groberman@me.com" role="img" aria-label="[email icon]" background={email}></ContactLink>
                <ContactLink href="https://github.com/MichaelAdamGroberman" role="img" aria-label="[github icon]" background={github} target='_blank'></ContactLink>
                <ContactLink href="https://twitter.com/MikeGroberman" role="img" aria-label="[twitter icon]" background={twitter} target='_blank'></ContactLink>
                <ContactLink href="https://www.linkedin.com/in/michael-adam-groberman" role="img" aria-label="[linkedin Icon]" background={linkedin} target='_blank'></ContactLink>
                <ContactLink href={PDF} target="_blank" role="img" aria-label="[resume Icon]" background={resume} ></ContactLink>
            </ContactLinks>
        </FooterContainer>
    )
}

export default Footer
