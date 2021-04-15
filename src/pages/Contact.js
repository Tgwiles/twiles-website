import React from 'react'
import InfoSection from '../components/InfoSection'
import { contactObj } from '../components/InfoSection/Data'

const Contact = () => {
    return (
        <>
            <InfoSection {...contactObj}/>
        </>
    )
}

export default Contact