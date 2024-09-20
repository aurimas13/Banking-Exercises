const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateTransaction(amount) {
    if (amount === "") {
        console.log("Amount cannot be empty.");
        return false;
    }

    // Convert string input to a number
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
        console.log("Amount must be a valid number and greater than zero.");
        return false;
    }

    console.log("Transaction validated successfully.");
    return true;
}

// Read user input asynchronously
rl.question("Enter transaction amount: ", (amount) => {
    if (validateTransaction(amount)) {
        console.log("Transaction processed: $" + amount);
    }
    rl.close();  // Close the input stream
});