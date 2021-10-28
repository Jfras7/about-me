'use strict'
let counter = 0 
let userName = prompt("What is your name?")
alert('Welcome '+ userName)

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
let videoGame = prompt("Do I like video games?")
if (videoGame.toLowerCase() == ('yes')){
    alert('Correct!')
        counter++;
}
else{
    alert('WRONG!')
}
let military = prompt("Was I in the USAF?")
if (military.toLowerCase() == ('yes')){
    alert('Correct!')
        counter++;
}
else{
    alert('WRONG!')
}
let space = prompt("Do I live in space?")
if (space.toLowerCase() == ('yes')){
    alert('Correct!')
        counter++;
}
else{
    alert('WRONG!')
}
let colorsAnswer = ['black', 'purple'];
let guess = 6;

// give the user 6 guesses to get the right answer
// while guess is greater than 1 repeat the question
// if answer is correct return
// after while loop display correct answers
while(guess >= 1){
    let colors = prompt("What is one of my favorite colors?");
    if(colorsAnswer[0] == colors || colorsAnswer[1] == colors){
        alert('Correct');
        break;} 
        
        else
        {alert('Wrong');
    guess --;}
        
    }
    if(guess < 1){
        alert("The correct answers were " + colorsAnswer[0] + " and " + colorsAnswer[1])
    }



// for(let i = 1; i <= guess; i++){
//     if(colorsAnswer[0] == colors ||
//         colorsAnswer[1] == colors){
//             alert('Correct')
//             counter++;
//             break;
//         } else{
//             alert('Wrong');
//             colors = prompt("What is one of my favorite colors?");
//             (guess < 1);
//             alert('The correct answer is black or purple');
//         }


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

            // userGuess = parseInt(prompt('Wrong! Try Again between 20-40'));
            if(userGuess == correctAnswer){
                alert('You Actually Did It!');
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
