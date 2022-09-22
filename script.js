let number = [Math.floor(Math.random() * 100)]; // to generate random number
let guessBtn = document.getElementById('guessBtn');

output = document.getElementById('outputText');
let chances= 0;

guessBtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    if(input == number){
        output.innerHTML = `You Guessed right, Your number is ${number}`
        chancesTaken = document.getElementById('chancesTaken');
        chancesTaken.innerHTML = `You have taken ${chances} chances`;
        score = document.getElementById('score');
        score.innerHTML = `Your Score is ${100 - chances}`
    }

    else if(input < number){
        output.innerHTML = "You guessed too low!"
    }

    else if(input > number){
        output.innerHTML = "You guessed too high"
    }

    if(input == ""){
       alert('Please enter a valid number');
    }

    else if(input > 100){
       alert('Please enter a number between 0 to 100');
    }

    chances ++;
    // console.log(chances);
});

