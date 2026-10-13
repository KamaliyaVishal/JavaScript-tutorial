/**
 * This code demonstrates the use of variables in JavaScript, including the differences between var, let, and const. 
 * It also shows how to declare variables, reassign them, and display their values in a table format.
 */

const accountBalance = 1000;
let accountHolder = "John Doe";
var accountType = "Savings";
additionalInfo = "This is a basic account.";
let isActive;


console.log("Account Holder:", accountHolder);
console.log("Account Balance:", accountBalance);

console.log(`Don't use var in modern JavaScript, use let or const instead. because var is function scoped and can lead to unexpected behavior. 
    Use let for variables that can change and const for variables that should not change.`);
console.log("Account Type:", accountType);

console.log(`Don't use unspecified variables in modern JavaScript, use let or const instead. 
    because unspecified variables are global scoped and can lead to unexpected behavior.`);
console.log("Additional Info:", additionalInfo);

console.log(`Unspecified variablres are unefined by default, so you need to assign a value to them before using them.`);
console.log("Is Active:", isActive);

console.log("\n--- Reassigning Variables ---\n");

// Reassigning the accountHolder variable
accountHolder = "Jane Smith";
console.log("Account Holder (after reassignment):", accountHolder);

// Attempting to reassign the accountBalance constant (will throw an error)
// accountBalance = 2000; // Uncommenting this line will cause an error because accountBalance is a constant

// Reassigning the accountType variable
accountType = "Current";
console.log("Account Type (after reassignment):", accountType);

console.log("\n--- Displaying Account Information in Table Format ---\n");
console.table([accountHolder, accountBalance, accountType, additionalInfo, isActive]);

