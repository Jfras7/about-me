'use strict'
// Emily was here
let counter = 0 
let userName = prompt("What is your name?")
alert('Welcome '+ userName)

function nfl(){
let sport = prompt("Do I watch the NFL?")
if (sport.toLowerCase() == ('yes')){
    alert('Correct!')
        counter++;
    console.log('Correct!')
} 
else{
    alert('WRONG!')
    console.log('WRONG!')
}
}
 nfl();

 function gaming(){
let videoGame = prompt("Do I like video games?")
if (videoGame.toLowerCase() == ('yes')){
    alert('Correct!')
        counter++;
}
else{
    alert('WRONG!')
}
}
gaming();

function usaf(){
let military = prompt("Was I in the USAF?")
if (military.toLowerCase() == ('yes')){
    alert('Correct!')
        counter++;
}
else{
    alert('WRONG!')
}
}
usaf();

function cosmos(){
let space = prompt("Do I live in space?")
if (space.toLowerCase() == ('yes')){
    alert('Correct!')
        counter++;
}
else{
    alert('WRONG!')
}
}
cosmos();

let colorsAnswer = ['black', 'purple'];
let guess = 6;

function colorGame(){
while(guess >= 1){
    let colors = prompt("What is one of my favorite colors?");
    if(colorsAnswer[0] == colors || colorsAnswer[1] == colors){
        alert('Correct');
        counter++;
        break;} 
        
        else
        {alert('Wrong');
    guess --;}
        
    }
    if(guess < 1){
        alert("The correct answers were " + colorsAnswer[0] + " and " + colorsAnswer[1])
    }
}
colorGame();

function guessingGame(){
    let correctAnswer = 33;
    console.log(correctAnswer);
    let guesses = 4;
    let userGuess = null
    // for(let i = 0; i < guesses; i++){
        while(correctAnswer !== userGuess){
            if(!guesses){
                alert('Out of guesses!')
                break
            }
            userGuess = parseInt(prompt('Guess my Age. You have ' + guesses + ' guesses left!'));
            guesses = guesses - 1;

            if(userGuess == correctAnswer){
                alert('You Actually Did It!');
                counter ++;
                break
            } else if(userGuess > correctAnswer){
                alert('You are to high!');
            } else if(userGuess < correctAnswer){
                alert('You are to low!');
            }
            else{
                alert('Follow Directions!');
        }
    }

}


guessingGame();

alert('See ya Later ' + userName + " You got " + counter + " Right");

