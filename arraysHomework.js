/* Tarea Arrays*/
// length() devuelve el tamaño del array

let frutas = ["Manzana", "Mango", "Lulo", "Maracuyá"];
let size = frutas.length; 

/* El metodo toString() convierte un array en una 
cadena de valores del array separados por comas*/

frutas = ["Manzana", "Mango", "Lulo", "Maracuyá"];
console.log(`toString() ${frutas.toString()}`);

/* pop() elimina el ultimo elemento del array y devolver ese elemento */

frutas = ["Manzana", "Mango", "Lulo", "Maracuyá"];
let lastVegetable = frutas.pop();
console.log(`pop() ${lastVegetable}`);
console.log(frutas);

/* push() se utiliza para añadir uno o más elementos al final de un array */

frutas = ["Manzana", "Mango", "Lulo", "Maracuyá"];
let newLength = frutas.push("Maracuyá");
console.log(frutas);
console.log(`new length: ${newLength}`);

/* El método join() se utiliza para unir todos los elementos de un array 
en una única cadena de texto, separados por un delimitador especificado. 
Si no se especifica un delimitador, los elementos se separan por comas. */

frutas = ["Manzana", "Mango", "Lulo", "Maracuyá"];
let result = frutas.join();
console.log(`join(): ${result}`);

/* shift() elimina el primer elemento de un array y devolver ese elemento */

frutas =  ["Manzana", "Mango", "Lulo", "Maracuyá"];
let vegetalEliminado = frutas.shift();
console.log(`shift() ${vegetalEliminado}`);
console.log(frutas);

/* El metodo unshift() añade uno o mas elementos al principio de un array 
y devuelve la nueva longitud del array */

frutas =  ["Manzana", "Mango", "Lulo", "Maracuyá"];
let nuevoArray = frutas.unshift('Fresa', 'Naranja');
console.log(`unshift indice: ${nuevoArray}`);
console.log(`unshift() ${frutas}`);