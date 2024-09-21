var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "./images/dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2){

    var player1Wins = document.querySelector("h1");

    player1Wins.innerHTML="<<< Player 1 Wins";

} else if (randomNumber2 > randomNumber1){

    var player2Wins = document.querySelector("h1");

    player2Wins.innerHTML="Player 2 Wins >>>";

} else if (randomNumber1 === randomNumber2){

    var MatchDrawn = document.querySelector("h1");

    MatchDrawn.innerHTML="Match is Drawn";

}

function reloadPage() {

    location.reload();
    
}


























// if(ranNum1=1){
//     document.querySelector("img").setAttribute("src","./images/dice1.png");
// }
// else if(ranNum1=2){
//     document.querySelector("img").setAttribute("src","./images/dice1.png");
// }
// else if(ranNum1=3){
//     document.querySelector("img").setAttribute("src","./images/dice1.png");
// }
// else if(ranNum1=4){
//     document.querySelector("img").setAttribute("src","./images/dice1.png");
// }
// else if(ranNum1=5){
//     document.querySelector("img").setAttribute("src","./images/dice1.png");
// }
// else if(ranNum1=6){
//     document.querySelector("img").setAttribute("src","./images/dice1.png");
// }
