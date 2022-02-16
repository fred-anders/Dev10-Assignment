// This function handles the initial user input. Runs on page load, see below...
function prompt_input() {
    let valid_max = false;
    let between = document.getElementById("between");
    max = Math.round(Number(window.prompt("what is the maximum number you want to guess?")));
    // We need a valid max to continue
    while (false == valid_max) {
        if (isNaN(max)) {
            // Not a number!
            window.alert("This is not a number, try again.");
            max = Math.round(Number(window.prompt("what is the maximum number you want to guess?")));
        }
        else if (max < 1) {
            // We don't want negative!
            window.alert("The number must be positive and greater than 1.");
            max = Math.round(Number(window.prompt("what is the maximum number you want to guess?")));
        }
        else {
            // Valid!
            valid_max = true;
            between.innerHTML = `Guess a number between 1 and ${max}`;
            val = Math.floor(Math.random() * max) + 1;
            console.log(`${val}`);
        }
    }
}

// This function handles the guesses. Triggered by button onclick.
function do_guess() {
    let numGuess = Number(document.getElementById("guess").value);
    console.log(`${numGuess}`);
    let feedback = document.getElementById("feedback");
    feedback.style.color = 'red';

    if (isNaN(numGuess)) {
        // Not a number!
        feedback.innerHTML = "That is not a number!";
        return;
    }
    if (numGuess > max || numGuess < 1) {
        // Out of range!
        feedback.innerHTML = "That number is not in range, try again.";
        return;
    }
    if (guessArray.indexOf(numGuess) == -1) {
        // Unique guess push to array
        guessArray.push(numGuess);
        
        if (numGuess == val) {
            // Guessed it!
            document.getElementById("feedback").style.color = 'black';
            feedback.innerHTML = `You got it! It took you ${guessArray.length} tries and your guesses were ${guessArray.join(", ")}`;
        }
        else if (numGuess > val) {
            // Too high
            feedback.innerHTML = "No, try a lower number.";
        }
        else {
            // Too low
            feedback.innerHTML = "No, try a higher number.";
        }
    } else {
        // Already guessed don't push to array
        feedback.innerHTML = "You already guessed that!";
    }
}

// Global variables
let max = 0;
let val = 0;
let guessArray = [];
// Prompt user for input on page load
prompt_input();
