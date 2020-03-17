
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImgSrc = "image/" + randomDiceImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImgSrc2 = "image/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎆Player 1 wins!"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎆Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML = "🎆Draw!"
}