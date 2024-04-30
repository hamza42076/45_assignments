// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.

function make_shirt(size:string ="large",text:string ="I love typscript"){
    if (size == "large" || text == "I love typscript"){
        console.log("your shirt size is large and I love typscript");
        
    }
    console.log(`your shirt size is ${size},and its color is ${text}`);
    
}

make_shirt("small","Blue")
make_shirt("medium","Yellow")
make_shirt("large","orange")