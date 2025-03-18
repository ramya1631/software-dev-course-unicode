
//Starter Code
// Task 1
let inputString1 = "Code";
let firstCodePoint= inputString1.charCodeAt(0);
let thirdCodePoint= inputString1.charCodeAt(2);
console.log("First character in the provided input string is: ", firstCodePoint);
console.log("Third character in the provided input string is: ", thirdCodePoint);

// Task 2
let wordFromCodePoints = String.fromCharCode(72) + String.fromCharCode(101) + String.fromCharCode(108) + String.fromCharCode(108);
console.log("Word from Code Points is: ", wordFromCodePoints);

// Task 3
let inputString2 = "Launch";
let firstChar = inputString2.charCodeAt(0); // Get first character code
let lastChar = inputString2.charCodeAt(inputString2.length - 1); // Get last character code

// Swap first and last character while keeping the rest of the string unchanged
swappedString = String.fromCharCode(lastChar) +
                inputString2.slice(1, -1) +
                String.fromCharCode(firstChar);

console.log("Swapped String:", swappedString);