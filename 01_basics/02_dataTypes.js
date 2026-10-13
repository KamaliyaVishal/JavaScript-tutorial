/** 
 * Data Types in JavaScript 
 * In JavaScript, data types are divided into two main categories: Primitive values and Objects (Reference types).
*/

console.log("\n--- Data Types in JavaScript ---\n");
console.log("JavaScript has the following data types:");

console.log("1. Primitive Data Types:");
console.log("   - String: Represents textual data, e.g., 'Hello, World!'");
console.log("   - Number: Represents numeric values, e.g., 42, 3.14");
console.log("   - Boolean: Represents true or false values, e.g., true, false");
console.log("   - Null: Represents the intentional absence of any object value, e.g., null");
console.log("   - Undefined: Represents a variable that has been declared but not assigned a value, e.g., undefined");
console.log("   - Symbol: Represents a unique and immutable value, often used as object property keys, e.g., Symbol('description')");
console.log("   - BigInt: Represents integers with arbitrary precision, e.g., 9007199254740991n");

console.log("\n2. Reference Data Types (Objects):");
console.log("   - Object: Represents a collection of key-value pairs, e.g., { name: 'John', age: 30 }");
console.log("   - Array: Represents an ordered list of values, e.g., [1, 2, 3, 4]");
console.log("   - Function: Represents a block of code that can be executed, e.g., function greet() { return 'Hello'; }");
console.log("   - Date: Represents a specific point in time, e.g., new Date()");
console.log("   - RegExp: Represents a regular expression, e.g., /ab+c/");
console.log("   - Map: Represents a collection of key-value pairs with unique keys, e.g., new Map()");
console.log("   - Set: Represents a collection of unique values, e.g., new Set()");
console.log("   - WeakMap: Represents a collection of key-value pairs with weakly held keys, e.g., new WeakMap()");
console.log("   - WeakSet: Represents a collection of unique values with weakly held references, e.g., new WeakSet()");
console.log("   - Promise: Represents the eventual completion (or failure) of an asynchronous operation, e.g., new Promise((resolve, reject) => { ... })");
console.log("   - Error: Represents an error that occurs during the execution of a program, e.g., new Error('Something went wrong')");
console.log("   - ArrayBuffer: Represents a generic, fixed-length raw binary data buffer, e.g., new ArrayBuffer(16)");
console.log("   - DataView: Represents a low-level interface for reading and writing multiple number types in an ArrayBuffer, e.g., new DataView(buffer)");
console.log("   - TypedArray: Represents an array-like view of an underlying binary data buffer, e.g., new Uint8Array(buffer)");
console.log("   - WebAssembly: Represents a low-level binary format for executing code on the web, e.g., WebAssembly.instantiate(buffer)");
console.log("   - Other built-in objects: JavaScript also provides other built-in objects like JSON, Math, and Intl for various purposes.");


console.log("\n--- Example of Data Types ---\n");

// Example of Primitive Data Types
console.log("\n--- Example of Primitive Data Types ---\n");
let name = "Alice"; // String   
console.log(typeof name); // "string"

let age = 30; // Number
console.log(typeof age); // "number"

let isStudent = true; // Boolean
console.log(typeof isStudent); // "boolean"

let email = null; // Null
console.log(typeof email); // "object"

let address; // Undefined
console.log(typeof address); // "undefined"

let uniqueId = Symbol("id"); // Symbol
console.log(typeof uniqueId); // "symbol"

let bigNumber = 9007199254740991n; // BigInt
console.log(typeof bigNumber); // "bigint"

// Example of Reference Data Types (Objects)
console.log("\n--- Example of Reference Data Types (Objects) ---\n");

let person = { name: "Bob", age: 25 }; // Object
console.log(typeof person); // "object"

let numbers = [1, 2, 3, 4]; // Array
console.log(typeof numbers); // "object"

function greet() { // Function
    return "Hello!";
}
console.log(typeof greet); // "function"

let currentDate = new Date(); // Date
console.log(typeof currentDate); // "object"

let regex = /ab+c/;
console.log(typeof regex); // "object"

