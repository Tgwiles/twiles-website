import React from 'react'
import {
    AboutContainer, 
    AboutPanel, 
    AboutText, 
    ResumeLink,
    ResumeImg,  
    GridContainer,  
    GridRow, 
} from './AboutElements'
import SkillsList from './SkillsGrid'

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
                <AboutPanel >  
                <GridContainer>
                    <GridRow>
                        {SkillsList}
                    </GridRow>
                </GridContainer>
                </AboutPanel>
            </AboutContainer>
        </>
    )
}

export default AboutSection
