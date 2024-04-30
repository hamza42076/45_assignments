"use strict";
// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged,
//   return the new array and store it in a separate array. Call show_magicians() with each array to show that
//    you have one array of the original names and one array with the Great added to each magician’s name.
let megicians_names = ["robert hook", "alexender", "jabir - bin - hayan", "abbu musa"];
function array(arr) {
    return [...arr];
}
function make_great(megicians_namesArray) {
    for (let i = 0; i < megicians_namesArray.length; i++) {
        megicians_namesArray[i] = "The Great" + megicians_namesArray[i];
    }
}
function show_magicians(megicians_names) {
    megicians_names.forEach(element => {
        console.log(element);
    });
}
const copyarray = array(megicians_names);
make_great(copyarray);
console.log("\nThis is my modified array");
show_magicians(copyarray);
console.log("\nThis is my originsl array");
show_magicians(megicians_names);
