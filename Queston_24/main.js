"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
console.log(" 1 Test for equality with string: ", "apple" === "apple");
console.log("Test for inequality with string: ", "apple" != "orange");
//  Tests using the lower case function
console.log(" 2 Tests using the lower case function ", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality
console.log(" 3 test with equality ", 26 === 26);
// numerical test with greater than                      
console.log(" 4 numerical test with greater than ", 10 > 5);
// numerical test with less than                      
console.log(" 5 numerical test with less than ", 5 < 8);
// numerical test less than equal to
console.log(" 6 numerical test with less than equal to ", 10 <= 12);
// numerical test less than equal to
console.log(" 7 numerical test with greater equal to ", 50 >= 40);
// Tests using "and" and "or" operators
console.log(" 8 Tests using and   operators ", 5 > 3 && 6 > 4);
// Tests using  or operators
console.log(" 9 Tests using  or operators ", 45 > 56 || 5 < 10);
// Test whether an item is in a array
const fruit = ["nashpati", "orange", "banana"];
console.log("Test Nashpati in array", fruit.includes("nashpati"));
const vegegtable = ["patato", "tomato", "onion"];
console.log("test tomato is not in array ", vegegtable.includes("pitch"));
