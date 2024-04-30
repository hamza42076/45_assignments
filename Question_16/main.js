"use strict";
// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 
// 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
let Guest_list = ["ehtesham ullah", "Muhammad Hamza", "Hafiz kaleem"];
// for (let i = 0; i < Guest_list.length; i++) {
//      console.log("Hello "+ Guest_list[i]+ " you must come in my birthday party! \nThank u for coming! ");
// };
let old_Guest = "hafiz kaleem";
let new_Guest = "shahina islam";
Guest_list[2] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log("Hello " + Guest_list[i] + " now u r still invite in my birthday party! \nThank u for coming! ");
}
;
console.log(`Mr. ${old_Guest} is not coming to the party`);
console.log("exercise 15");
console.log("Dear my all friend we r found a bigger dinner table so, Hence we invite more three people");
Guest_list.unshift("Bilal ansari");
Guest_list.splice(3, 0, "haris");
Guest_list.push("Imran bihari");
for (let i = 0; i < Guest_list.length; i++) {
    console.log("Hello " + Guest_list[i] + " we invite you in our party because we found a big dinner table! \nThank u for coming! ");
}
;
