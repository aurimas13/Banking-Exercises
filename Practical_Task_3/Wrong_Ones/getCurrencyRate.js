function getCurrencyRate(fromCurrency, toCurrency) {
    // Check if either currency is an empty string
    if (fromCurrency == "") {
        alert("From currency cannot be empty."); // This will trigger a ReferenceError in Node.js
        return false;
    }
    
    if (toCurrency == "") {
        alert("To currency cannot be empty."); // This will trigger a ReferenceError in Node.js
        return false;
    }
    
    // Check if both currencies are valid (this is just an example check)
    if (fromCurrency.length !== 3 || toCurrency.length !== 3) {
        alert("Invalid currency codes. Must be 3 characters long.");
        return false;
    }

    // Log the validation
    return true;
    console.log("Currency validation successful.");
}

// Use prompt to ask for user input (this will also trigger a ReferenceError in Node.js)
let fromCurrency = prompt("Enter the from currency (e.g., USD):");
let toCurrency = prompt("Enter the to currency (e.g., EUR):");

// Validate the currencies and process the result
if (getCurrencyRate(fromCurrency, toCurrency)) {
    console.log(`Currency conversion from ${fromCurrency} to ${toCurrency} is being processed.`);
} else {
    console.log("Currency conversion failed.");
}
