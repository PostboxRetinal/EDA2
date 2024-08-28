/*
Description:
- Create a function that receives a number as a parameter and returns if the number is even or odd.
- Create a regular function and an arrow function.
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