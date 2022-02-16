function get_number(prompt) {
    let valid_input = false;
    let num_rolls, input;

    while(!valid_input) {
        input = window.prompt(prompt);

        num_rolls = Number(input);

        if(num_rolls != NaN && num_rolls > 0) {
            valid_input = true;
        }
    }

    return num_rolls;
}