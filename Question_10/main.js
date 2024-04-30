"use strict";
// 10.	Adding Comments: Choose two of the programs you’ve written,
//  and add at least one comment to each. If you don’t have anything specific to write
//  because your programs are too simple at this point,
//  just add your name and the current date at the top of each program file.
//  Then write one sentence describing what the program does.
let personName = "hamza ansari";
let date = 2 / 4 / 2024;
console.log(`This is my name:${personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} ,its my birthday date${date}`);
