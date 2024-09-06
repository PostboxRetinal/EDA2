/*
1.	Implementar una función que tenga como parámetros dos listas enlazadas de números ordenados de mayor a menor
y que retorne una nueva lista con la unión de ambas y sus elementos ordenados de menor a mayor.
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	toArray() {
		//descubrí que este método permite convertir la lista en un array
		const array = [];
		let current = this.head;
		while (current) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}

	fromArray(array) {
		//método para crear una lista enlazada desde un array
		for (let i = array.length - 1; i >= 0; i--) {
			this.insert(array[i]);
		}
	}

	insert(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
	}

	ordenarMayores(list1, list2) {
		const arreglo1 = list1.toArray();
		const arreglo2 = list2.toArray();

		//arregloCombinado es un arreglo que contiene los elementos de arreglo1 y arreglo2
		const arregloCombinado = arreglo1.concat(arreglo2);

		arregloCombinado.sort((valorA, valorB) => valorA - valorB);

		const mergedList = new LinkedList();
		mergedList.fromArray(arregloCombinado);

		return mergedList;
	}
}

//testing de Información
const list1 = new LinkedList();
list1.insert(1);
list1.insert(61);
list1.insert(7);
list1.insert(23);
list1.insert(9);
list1.insert(5);

const list2 = new LinkedList();
list2.insert(5);
list2.insert(1);
list2.insert(3);
list2.insert(4);
list2.insert(14);
list2.insert(21);

//combino las listas y las ordeno
const linkedList = new LinkedList(); 
const listaOrdenada = linkedList.ordenarMayores(list1, list2);
//mostrar en pantalla la lista ordenada
console.log(`Lista combinada ordenada: ${listaOrdenada.toArray()}`);
