export const homeObj = {
    id: 'Intro', 
    lightBg: false, 
    lightText: true, 
    lightTextDesc: true, 
    topLine: 'Hello, there',
    headLine: 'Welcome to my Website', 
    description: 'In this website, I do stuff, show items, and even explain things', 
    imgStart: false, // Is image on left or right (does it start first)
    img: process.env.PUBLIC_URL + '/images/profilepic.jpg', 
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
    img: process.env.PUBLIC_URL + '/images/profilepic.jpg', 
    alt: 'twiles portrait',
    primary: true, 
    darkText: false
}

export const projectsObj = {
    id: 'projects', 
    lightBg: false, 
    lightText: true, 
    lightTextDesc: true, 
    topLine: 'Projects',
    headLine: 'Here\'s what I\'ve worked on', 
    description: 'Below is a timeline of projects that I am either working on or have completed', 
    imgStart: true, // Is image on left or right (does it start first)
    img: process.env.PUBLIC_URL + '/images/stanley2.JPG', 
    alt: 'stanley2',
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
    description: 'If you would like to reach out, please feel free to contact me via LinkedIn or Email', 
    imgStart: true, // Is image on left or right (does it start first)
    img: process.env.PUBLIC_URL + '/images/stanley1.JPG', 
    alt: 'Stanley', 
    primary: true, 
    darkText: false
}