const accountBalance = 1000;
let accountHolder = "John Doe";
var accountType = "Savings";
additionalInfo = "This is a basic account.";

console.log("Account Holder:", accountHolder);
console.log("Account Balance:", accountBalance);
console.log("Account Type:", accountType);
console.log("Additional Info:", additionalInfo);

console.log("\n--- Reassigning Variables ---\n");

// Reassigning the accountHolder variable
accountHolder = "Jane Smith";
console.log("Account Holder (after reassignment):", accountHolder); 

// Attempting to reassign the accountBalance constant (will throw an error)
// accountBalance = 2000; // Uncommenting this line will cause an error because accountBalance is a constant

// Reassigning the accountType variable
accountType = "Checking";
console.log("Account Type (after reassignment):", accountType);
