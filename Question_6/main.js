"use strict";
// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination,
//  "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//  Then print the name after striping the white spaces.
let personName = "hamza ansari";
let number = 1234;
console.log(`The member\n\t ${personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} \n\t\t Roll num is ${number}`);
