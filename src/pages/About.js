import React from 'react'
import InfoSection from '../components/InfoSection'
import { aboutObj } from '../components/InfoSection/Data'

const About = () => {
    return (
        <>
            <InfoSection {...aboutObj} />
        </>
    )
}

export default About