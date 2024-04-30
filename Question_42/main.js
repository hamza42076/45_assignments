"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
let megicians_names = ["robert hook", "alexender", "jabir - bin - hayan", "abbu musa"];
function make_great(megicians_namesArray) {
    for (let i = 0; i < megicians_namesArray.length; i++) {
        megicians_names[i] = "The Great" + megicians_namesArray[i];
    }
}
function show_magicians(megicians_names) {
    megicians_names.forEach(element => {
        console.log(element);
    });
}
make_great(megicians_names);
show_magicians(megicians_names);
let array = ["bilal ", "HAmza", "haris"];
function half(bareBhai) {
    for (let i = 0; i < bareBhai.length; i++) {
        array[i] = "Mrs " + bareBhai[i];
    }
}
function bhai(mre_friend) {
    mre_friend.forEach(element => {
        console.log(element);
    });
}
half(array);
bhai(array);
