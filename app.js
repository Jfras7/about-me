'use strict'

let userName = prompt("What is your name?")
alert('Welcome '+ userName)

let sport = prompt("Do I watch the NFL?")
if (sport.toLowerCase() == ('yes')){
    alert('Correct!')
    //console.log('Correct!')
} 
else{
    alert('WRONG!')
    //console.log('WRONG!')
}
let videoGame = prompt("Do I like video games?")
if (videoGame.toLowerCase() == ('yes')){
    alert('Correct!')
}
else{
    alert('WRONG!')
}
let military = prompt("Was I in the USAF?")
if (military.toLowerCase() == ('yes')){
    alert('Correct!')
}
else{
    alert('WRONG!')
}
let space = prompt("Do I live in space?")
if (space.toLowerCase() == ('yes')){
    alert('Correct!')
}
else{
    alert('WRONG!')
}
alert('See ya Later ' + userName)