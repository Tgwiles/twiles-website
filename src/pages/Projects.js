import React from 'react'
import InfoSection from '../components/InfoSection'
import { projectsObj } from '../components/InfoSection/Data'

const Projects = () => {
    return (
        <>
            <InfoSection {...projectsObj} />
        </>
    )
}

export default Projects
