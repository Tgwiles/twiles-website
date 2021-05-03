import React from 'react'
import {AboutContainer, AboutPanel, AboutText, ListItem, ResumeImg, ResumeLink, SkillsList} from './AboutElements'

const AboutSection = () => {
    return (
        <>
            <AboutContainer>
                <AboutPanel >  
                    <AboutText>Below is a summary of my skills. You can click the icon to view my resume.</AboutText>
                    <ResumeLink href={process.env.PUBLIC_URL + 'twiles_resume.pdf'} target='__blank'>
                        <ResumeImg src={process.env.PUBLIC_URL + '/images/resume-icon.png'} alt='Resume'></ResumeImg>
                    </ResumeLink>
                </AboutPanel>
                <AboutPanel>
                <SkillsList>
                    <ListItem>React.js</ListItem>
                    <ListItem>Javascript</ListItem>
                    <ListItem>HTML</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>C#</ListItem>
                </SkillsList>
                <SkillsList>
                    <ListItem>.NET Framework</ListItem>
                    <ListItem>Java</ListItem>
                    <ListItem>Python</ListItem>
                    <ListItem>SQL</ListItem>
                </SkillsList>
                </AboutPanel>
            </AboutContainer>
        </>
    )
}

export default AboutSection
