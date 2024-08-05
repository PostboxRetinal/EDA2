/*
Description:
- Create a function that receives a number as a parameter and returns if the number is even or odd.
- Create a regular function and an arrow function.
*/

// Differences between regular and arrow functions:
/*
Arrow functions provide a more concise syntax, inherit "this" from the surrounding context, and do not have their own "arguments" object or "super" keyword. 
Regular functions have their own "this" binding, "arguments" object, and can be used as constructors with a "prototype" property.
*/

//Regular function
function regularFunction(a){
    if (a%2 === 0){
        return console.log('Even')
    }else{
        return console.log('Odd')
    }
}

// Arrow function
const arrowFunction = (a) => {
    if (a%2 === 0){
        return console.log('Even')
    }else{
        return console.log('Odd')
    }
}