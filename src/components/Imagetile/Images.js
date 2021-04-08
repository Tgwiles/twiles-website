import React from 'react';

var srcs = ['/images/profilepic.jpg', '/images/stanley1.jpg', '/images/stanley2.jpg']

const Images = () => {

    return (
        <div>
            <img src={srcs[0]} width='350px' height='300px' alt={srcs[0].valueOf} ></img>
            <img src={srcs[1]} width='350px' height='300px' alt={srcs[1].valueOf} ></img>
            <img src={srcs[2]} width='350px' height='300px' alt={srcs[2].valueOf} ></img>
        </div>
    )
};

// createImageNode(srcs[0])

// function createImageNode(i) {
//     var img = document.createElement('img');
//     img.src = i;
//     img.width = "300";
//     img.style.margin = "15px";
//     imgList.push(img)
// }


export default Images;


