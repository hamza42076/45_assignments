// exercise # 28
// declear a variable
let person_Age:number = 65;


// • If the person is less than 2 years old, print a message that the person is a baby.
if (person_Age < 2){
    console.log("The person is a baby! ");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if(person_Age >=2 && person_Age < 4){
    console.log("The person is a toddler. ");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (person_Age >= 4 && person_Age < 13){
    console.log("The person is kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (person_Age >= 13 && person_Age < 20){
    console.log("The person is a teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (person_Age >= 20 && person_Age < 65){
    console.log("The person is a adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else if(person_Age == 65){
    console.log("the person is elder");
    
}