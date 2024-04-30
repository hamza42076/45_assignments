"use strict";
// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner
// , so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14.
//  Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let Guest_list = ["ehtesham ullah", "Muhammad Hamza", "Hafiz kaleem"];
for (let i = 0; i < Guest_list.length; i++) {
    console.log("Hello " + Guest_list[i] + " you must come in my birthday party! \nThank u for coming! ");
}
;
let old_Guest = "hafiz kaleem";
let new_Guest = "shahina islam";
Guest_list[2] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log("Hello " + Guest_list[i] + " now u r still invite in my birthday party! \nThank u for coming! ");
}
;
console.log(`Mr. ${old_Guest} is not coming to the party`);
