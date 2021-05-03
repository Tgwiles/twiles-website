export const homeObj = {
    id: 'intro', 
    lightBg: false, 
    lightText: true, 
    lightTextDesc: true, 
    topLine: 'Welcome',
    headLine: 'Thomas Website', 
    description: 'Welcome to my personal website. My aim is to demonstrate my skills and enthusiasm for design in a visually appealing and interactive way', 
    imgStart: false, // Is image on left or right (does it start first)
    img: process.env.PUBLIC_URL + '/images/profilepic.png', 
    alt: 'twiles portrait',
    primary: true, 
    darkText: false
}

export const aboutObj = {
    id: 'about', 
    lightBg: false, 
    lightText: true, 
    lightTextDesc: true, 
    topLine: 'A little about me',
    headLine: 'Who am I?', 
    description: 'My name is Thomas, I am a passionate developer who was raised in the United Kingdom and moved to the US for a Computer Science degree', 
    imgStart: false, // Is image on left or right (does it start first)
    img: process.env.PUBLIC_URL + '/images/resume-icon.png', 
    alt: 'twiles portrait',
    primary: true, 
    darkText: false
}

export const contactObj = {
    id: 'contact', 
    lightBg: false, 
    lightText: true, 
    lightTextDesc: true, 
    topLine: 'Contact me',
    // headLine: 'Want to get in touch?', 
    description: 'If you would like to reach out, please feel free to contact me via <a href="https://www.linkedin.com/in/tgwiles">LinkedIn</a> or <a href="mailto:thomasgwiles1@gmail.com">Email</a>', 
    imgStart: true, // Is image on left or right (does it start first)
    img: process.env.PUBLIC_URL + '/images/stanley1.JPG', 
    alt: 'Stanley', 
    primary: true, 
    darkText: false
}