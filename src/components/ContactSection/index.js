import React from 'react'
import {ContactContainer, ContactPanel, ContactText, ContactImg, ContactLink} from './ContactElements'

const Contacts = () => {
    return (
        <>
            <ContactContainer>
                <ContactPanel >  
                    <ContactLink href='https://www.linkedin.com/in/tgwiles/' target='__blank'>
                        <ContactImg src={process.env.PUBLIC_URL + '/images/linkedin-512.png'} alt="LinkedIn"></ContactImg>
                    </ContactLink>                     
                    <ContactLink href='mailto:thomasgwiles1@gmail.com'>
                        <ContactImg src={process.env.PUBLIC_URL + '/images/email-512.png'} alt="Email"></ContactImg>
                    </ContactLink>                     
                </ContactPanel>
                <ContactText>Want to get in contact? Feel free to reach out here.</ContactText>
            </ContactContainer>
        </>
    )
}

export default Contacts
