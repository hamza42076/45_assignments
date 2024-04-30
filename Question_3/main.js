"use strict";
// 3.	Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "hamza ansari";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
