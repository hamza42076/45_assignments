
// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guest_list :string[]=["ehtesham ullah","Muhammad Hamza","Hafiz kaleem"]

// for (let i = 0; i < Guest_list.length; i++) {
//      console.log("Hello "+ Guest_list[i]+ " you must come in my birthday party! \nThank u for coming! ");
      
    
// };

let old_Guest = "hafiz kaleem";
let new_Guest = "shahina islam";

Guest_list[2] = new_Guest;

// 
console.log(`Mr. ${old_Guest} is not coming to the party`);

console.log("exercise 15");


console.log("Dear my all friend we r found a bigger dinner table so, Hence we invite more three people");

Guest_list.unshift("Bilal ansari");
Guest_list.splice(3,0,"haris");
Guest_list.push("Imran bihari");



for (let i = 0; i < Guest_list.length; i++) {
    console.log("Hello "+ Guest_list[i]+ " we invite you in our party because we found a big dinner table! \nThank u for coming! ");
     
   
};
 console.log("we can invite only two people for dinner");

 Guest_list.slice(0,1,)
 