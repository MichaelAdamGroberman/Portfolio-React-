import React from 'react'
import { Sectioncontainer, SectionTitle, SectionContent } from '../sharedElements'
import { ContactForm, Formtitle, Formbutton, Formdesc, Formwarn } from './contactElements'
import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [nameflag, setNameflag] = useState(false);

    const [email, setEmail] = useState("");
    const [emailflag, setEmailflag] = useState(false);
    const [emailregexflag, setEmailregexflag] = useState(false);

    const [subject, setSubject] = useState("");
    const [subjectflag, setSubjectflag] = useState(false);

    const [Content, setContent] = useState("");
    const [Contentflag, setContentflag] = useState(false);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const handleName = (e) => { if (!name || name === "") { setNameflag(true) } else { setNameflag(false) } }
    const handleContent = (e) => { if (!Content || Content === "") { setContentflag(true) } else { setContentflag(false) } }
    const handleSubject = (e) => { if (!subject || subject === "") { setSubjectflag(true) } else { setSubjectflag(false) } }

    const handleEmail = (e) => { if (!email || email === "") { setEmailflag(true); setEmailregexflag(false) } else if (!validateEmail(email)) { setEmailflag(false); setEmailregexflag(true) } else { setEmailflag(false); setEmailregexflag(false) } }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (name && name !== "") {
            if (subject && subject !== "") {
                if (Content && Content !== "") {
                    if (email && email !== "") {
                        if (validateEmail(email)) {
                            setName("")
                            setContent("")
                            setSubject("")
                            setEmail("")
                            alert("Thank you for submitting your message!")
                            return
                        }
                        else { setEmailregexflag(true); alert("invalid email"); return }
                    }
                }
            }
        }
        handleName(e)
        handleContent(e)
        handleSubject(e)
        handleEmail(e)
        alert("please fill out all fields")
    }
    return (

        <Sectioncontainer id="Contact">
            <SectionTitle>Contact Me</SectionTitle>
            <SectionContent>
                <ContactForm onSubmit={handlesubmit}>
                    <Formtitle>Please send me a message</Formtitle>
                    <Formdesc>Your name</Formdesc>
                    <input type="text" onChange={(e) => { setName(e.target.value); setNameflag(false) }} onMouseLeave={(e) => handleName(e)} value={name} />
                    {nameflag ? <Formwarn>Name is required</Formwarn> : ""}


                    <Formdesc>Subject</Formdesc>

                    <input type="text" onChange={(e) => { setSubject(e.target.value); setSubjectflag(false) }} onMouseLeave={(e) => handleSubject(e)} value={subject} />
                    {subjectflag ? <Formwarn>Subject is required</Formwarn> : ""}


                    <Formdesc>Message</Formdesc>

                    <textarea onChange={(e) => { setContent(e.target.value); setContentflag(false) }} onMouseLeave={(e) => handleContent(e)} value={Content} />
                    {Contentflag ? <Formwarn>Message is required</Formwarn> : ""}


                    <Formdesc>your email</Formdesc>
                    <input type="text" onChange={(e) => { setEmail(e.target.value); setEmailflag(false) }} onMouseLeave={(e) => handleEmail(e)} value={email} />
                    {emailflag ? <Formwarn>Email is required</Formwarn> : ""}
                    {emailregexflag ? <Formwarn>please enter a valid email</Formwarn> : ""}

                    <Formbutton >submit</Formbutton>

                </ContactForm>
            </SectionContent>

        </Sectioncontainer>
    )
}

export default Contact
