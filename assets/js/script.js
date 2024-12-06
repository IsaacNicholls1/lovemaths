// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
             } else {
                    let gameType = this.getAttribute("data-type");
                    alert(`You clicked ${gameType}`); 
            }
        });
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // Creates two random numbers between 1 and 25
    number1 = Math.floor(Math.random() * 25) + 1;
    number2 = Math.floor(Math.random() * 25) + 1;

    // Selects and displays the question
    document.getElementById('question').innerHTML = number1 + ' x ' + number2;
    correctAnswer = number1 * number2;
}

runGame();

function checkAnswer    () {
    // Get the user's answer from the input box
    let userAnswer = document.getElementById('answer').value;

    // Check the answer and display a message
    if (userAnswer == correctAnswer) {
        document.getElementById('result').innerHTML = 'Correct!';
    } else {
        document.getElementById('result').innerHTML = 'Wrong answer. The correct answer is ' + correctAnswer;
    }
}   

function calculateCorrectAnswer() {
    return number1 * number2;
}

function incrementScore() {
    let score = parseInt(document.getElementById('score').innerText);
    score++;
    document.getElementById('score').innerText = score;
}

function incrementWrongAnswer() {
    let wrongAnswer = parseInt(document.getElementById('wrongAnswer').innerText);
    wrongAnswer++;
    document.getElementById('wrongAnswer').innerText = wrongAnswer;
}

function displayAdditionQuestion() { 
    // Generate two random numbers
    number1 = Math.floor(Math.random() * 25) + 1;
    number2 = Math.floor(Math.random() * 25) + 1;

    // Display the numbers in the question box
    document.getElementById('question').innerHTML = number1 + ' + ' + number2;
}

function displaySubtractQuestion() {
    // Generate two random numbers
    number1 = Math.floor(Math.random() * 25) + 1;
    number2 = Math.floor(Math.random() * 25) + 1;

    // Display the numbers in the question box
    document.getElementById('question').innerHTML = number1 + ' - ' + number2;
}

function displayMultiplyQuestion() {    
    // Generate two random numbers
    number1 = Math.floor(Math.random() * 25) + 1;
    number2 = Math.floor(Math.random() * 25) + 1;

    // Display the numbers in the question box
    document.getElementById('question').innerHTML = number1 + ' x ' + number2;
}

