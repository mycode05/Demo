function guess(num) {
    const ranNum = Math.floor(Math.random() * num) + 1;
    let key = 0;

    while (key !== ranNum) {
        const input = prompt(`Guess a number between 1 and ${num}:`);
        key = parseInt(input);

        if (key > 1 && key < num) {
            console.log(key);
            if (key < ranNum) {
                alert('Try again. Too low.');
            } else if (key > ranNum) {
                alert('Try again. Too high.');
            }
        } else {
            alert(`Please, enter number between 1 and ${num} only.`);
        }
    }

    alert(`Congratulations! You have guessed the number ${ranNum} correctly.`);
}

// Get user input
const userInput = prompt("Enter the number:");
const number = parseInt(userInput);
guess(number);
