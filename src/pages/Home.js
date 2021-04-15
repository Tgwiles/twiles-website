import React from 'react'
import InfoSection from '../components/InfoSection'
import { homeObj } from '../components/InfoSection/Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObj}/>
        </>
    )    
}

export default Home
