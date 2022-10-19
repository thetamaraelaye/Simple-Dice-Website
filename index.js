var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 +".png"; //get the image

var randomImageSrc = "images/" + randomDiceImage; //get image path

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSrc); //assign image to a var

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!"
} 
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!"
} else {
    document.querySelector("h1").innerHTML="Draw!"
}