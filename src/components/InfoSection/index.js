import React from 'react'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    Heading, 
    Column2, 
 } from './InfoElements'
import ScrollPanel from '../ScrollPanel'

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>Hi, I'm Thomas. I like</Heading>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ScrollPanel/>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
