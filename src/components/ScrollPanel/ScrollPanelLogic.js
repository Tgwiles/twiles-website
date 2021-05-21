let ScrollImages = [];
let imgPaths = [
    "Bacon.png", 
    "Beer.png", 
    "Cheese.png", 
    "Cookies.png", 
    "Fish Food.png", 
    "Doughnut.png", 
    "Hamburger.png",
    "Nachos.png", 
    "Pizza.png", 
    "Tea.png", 
    "blank.png"
];

for (var i = 0; i < imgPaths.length; i++){
    ScrollImages.push(createImageDiv(imgPaths[i], i));
}

function createImageDiv(url, index){
    return (
        <div key={index}>
            <img src={process.env.PUBLIC_URL + "images/ScrollIcons/" + url } alt="foo"/>
        </div>
    );
}

export default ScrollImages; 
