"use strict";
// 5.	Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous
// _person. 
// Then compose your message and store it in a new variable called message. Print your message.
let first_person = "ashir alam";
let message = "How are you brother, will u marry me!";
console.log(`${first_person.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')},${message}`);
