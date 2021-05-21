import { React } from 'react';
import { Carousel } from "react-responsive-carousel";
import ScrollImages from './ScrollPanelLogic.js';
import { WordContainer, ImageContainer } from './ScrollPanelElements.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let ItemNames = [
    "bacon",
    "beer",
    "cheese",
    "cookies",
    "seafood",
    "doughnuts",
    "cheeseburgers",
    "nachos",
    "pizza",
    "tea",
    "making things.",
]; 

const ScrollPanel = () => {

    return (
        <>
            <WordContainer>
                <Carousel showArrows={false} axis={'vertical'} autoPlay={true} dynamicHeight={false} width={300} infiniteLoop={false} showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false}>
                    { ItemNames }
                </Carousel>
            </WordContainer>
                
            <ImageContainer>
                <Carousel showArrows={false} axis={'vertical'} autoPlay={true} dynamicHeight={false} width={200} infiniteLoop={false} showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false}>
                    { ScrollImages }
                </Carousel>
            </ImageContainer>
        </>
    )
}

export default ScrollPanel
