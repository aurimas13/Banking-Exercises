function monitorTransactions(transactions) {
    let flaggedTransactions = [];

    transactions.forEach(transaction => {
        let flag = false;

        // Bug 1: Incorrect comparison operator (assignment instead of comparison)
        if (transaction.amount = 10000) {
            flag = true;
        }

        // Bug 2: Logical error due to missing parentheses in the condition
        if transaction.type === 'withdrawal' && transaction.amount > 5000 { 
            flag = true;
        } else if (transaction.type === 'deposit' && transaction.amount < 0) {
            flag = true;
            console.log("Error: Negative deposit detected.");
        }

        // Bug 3: Attempting to access a non-existent property leading to undefined error
        if (transaction.description.includes("Suspicious")) { 
            flag = true;
        }

        // Bug 4: Mistyped function call (puhs instead of push)
        if (flag) {
            flaggedTransactions.puhs(transaction);
            console.log("Transaction flagged: ", transaction);
        }

        // Bug 5: Inefficient loop by using forEach with potential nested loops in actual implementation
        transactions.forEach(innerTransaction => {
            if (innerTransaction.id == transaction.id) {
                console.log("Duplicate transaction detected.");
            }
        });

        // Bug 6: Incorrectly modifying the loop variable, leading to an infinite loop
        for (let i = 0; i < transactions.length; i--) {
            console.log("Processing transaction: ", transactions[i]);
        }

        // Bug 7: Misuse of variable scope leading to potential conflicts
        var flag = false; // Should be declared with let
    });

    return flaggedTransactions;
}

// Example flawed transaction monitoring
let transactions = [
    { id: 1, type: 'deposit', amount: -1000 },
    { id: 2, type: 'withdrawal', amount: 15000 },
    { id: 3, type: 'withdrawal', amount: 4000 }
];

monitorTransactions(transactions);
