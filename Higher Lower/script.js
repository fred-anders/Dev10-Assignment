let valid_max = false;
let between = document.getElementById("between");
var max = Math.round(Number(window.prompt("what is the maximum number you want to guess?")));
while (valid_max == false)
    if (isNaN(max)) {
        window.alert("This is not a number, try again.");
        max = Number(window.prompt("what is the maximum number you want to guess?"));
    }
    else if (max < 1) {
        window.alert("The number must be positive and greater than 1.");
        max = Number(window.prompt("what is the maximum number you want to guess?"));
    }
    else {
        valid_max = true;
        between.innerHTML = `Guess a number between 1 and ${max}`;
    }
let val = Math.floor(Math.random() * max) + 1;
console.log(`${val}`);
guessArray = [];

function do_guess() {
    let numGuess = Number(document.getElementById("guess").value);
    console.log(`${numGuess}`);
    let feedback = document.getElementById("feedback");
    feedback.style.color = 'red';

    if (isNaN(numGuess)) {
        feedback.innerHTML = "That is not a number!";
        return;
    }
    if (numGuess > max || numGuess < 1) {
        feedback.innerHTML = "That number is not in range, try again.";
        return;
    }
    if (guessArray.indexOf(numGuess) == -1) {
        guessArray.push(numGuess);
        if (numGuess == val) {
            document.getElementById("feedback").style.color = 'black';
            feedback.innerHTML = `You got it! It took you ${guessArray.length} tries and your guesses were ${guessArray.join(", ")}`;
        }
        else if (numGuess > val) {
            feedback.innerHTML = "No, try a lower number.";
        }
        else {
            feedback.innerHTML = "No, try a higher number.";
        }
    } else {
        feedback.innerHTML = "You already guessed that!";
    }
}

