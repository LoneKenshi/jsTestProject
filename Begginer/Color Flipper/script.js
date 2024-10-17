function getRandomInt(){
    return Math.floor(Math.random() * 255)
}

function randomColor(){
    red = getRandomInt();
    green = getRandomInt();
    blue = getRandomInt();

    let bodyColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    console.log(bodyColor);
    document.body.style.backgroundColor = bodyColor;
}
