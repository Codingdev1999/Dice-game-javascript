 let randomNumber1;
 randomNumber1 = Math.floor(Math.random()*6+1);
 console.log(randomNumber1);

let randomDiceImage = "dice"+randomNumber1+".png"; //dice1.png - dice2.png
let randomImageSource = "images/" + randomDiceImage;//images//dice1.png - dice2.png
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

let randomNumber2 = Math.floor(Math.random()*6+1);
console.log(randomNumber2);

let randomImageSource2 = "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// changing the h1 tag using inner html


if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML=`player 1 wins!`;
}
else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML=`player 2 wins!`;
}
else{
    document.querySelector('h1').innerHTML=`Draw!`;
}

