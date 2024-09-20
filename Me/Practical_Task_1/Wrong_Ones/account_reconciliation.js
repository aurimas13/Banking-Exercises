function reconcileAccounts(accounts) {
    let reconciled = [];
    
    for (let i = 0; i <= accounts.length; i++) 
        let account = accounts[i];
        let difference = account.credits - account.debits;
        
        if (difference > 0) {
            account.status = 'balanced';
        } else if (difference < 0) {
            account.status = 'unbalanced';
        } else {
            account.status = 'zero balance';
            console.log("Error: Account has zero balance, reconciliation flawed.");
        }
        
        reconciled.push(account);
    }
    
    return reconciled;
}

// Test the flawed account reconciliation
const accounts = [
    { credits: 1000, debits: 500, status: '' },
    { credits: 200, debits: 300, status: '' }
];
reconcileAccounts(accounts);


