"use strict";
// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
let megicians_names = ["robert hook", "alexender", "jabir - bin - hayan", "abbu musa"];
function show_magicians(megicians_names) {
    megicians_names.forEach(element => {
        console.log(element);
    });
}
show_magicians(megicians_names);
