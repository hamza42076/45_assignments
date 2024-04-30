// 20.	Think of something you could store in a array.
//  For example, you could make a list of mountains, rivers, countries, cities, languages, 
//  or anything else you’d like.
//  Write a program that creates a list containing these items

let favourtie_place:string[] =["mountain","river","countries","cities"];

let hamza:string="Ashir ka dunya";

for (let i = 0; i < favourtie_place.length; i++) {
    console.log(`${hamza.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(' ')},\n${favourtie_place[i]}`);
    
    
}

// console.log(`${hamza.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(' ')}, \n${favourtie_place}`);
