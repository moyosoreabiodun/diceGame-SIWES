function diceGame(){
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);

    const diceFaces = ["dice1.png","dice2.png","dice3.png", "dice4.png", "dice5.png", "dice6.png"];
  
    document.getElementById("img1").setAttribute("src","images/"+ diceFaces[randomNumber1]);

    document.getElementById("img2").setAttribute("src","images/" + diceFaces[randomNumber2]);

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

diceGame();