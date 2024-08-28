/*
Create and handle your family tree until your third pre-generation, 
think there is only one person to make next generation (mom or dad).

✓ Every person must have a full name and birthdate.
✓ Every person could have more than one child
✓ Print your family tree in pre-order, post order and in-order
*/
class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}
}

class City {
	constructor(name) {
		this.name = name;
	}
}

class Graph {
	constructor() {
		this.nodes = [];
		this.adjList = {};
	}

	addNode(node) {
		this.nodes.push(node);
		this.adjList[node] = [];
	}

	addEdge(node1, node2) {
		this.adjList[node1].push(node2);
		this.adjList[node2].push(node1);
	}

	printGraph() {
		console.log(this.adjList);
	}

	searchNode(value) {
		if (!this.nodes.length) {
			return null;
		}
		return this.nodes.find((node) => node === value);
	}

	printAdjacencyList(node) {
		if (this.searchNode(node)) {
			console.log(this.adjList[node]);
		} else {
			console.log('Node not found');
		}
	}

	peopleInCity(cityName) {
		const people = this.nodes.filter(
			(node) => node instanceof Person && node.city.name === cityName
		);
		if (people.length > 0) {
			console.log(`Gente ubicada en proximidades a ${cityName}`);
			people.forEach((person) =>
				console.log(`- ${person.name}, edad: ${person.age}`)
			);
		} else {
			console.log(`No se encuentran personas registradas en cercanias de ${cityName}`);
		}
	}
}

//Creating cities
const city1 = new City('Cali');
const city2 = new City('Bogotá');
const city3 = new City('Barrancabermeja');
const city4 = new City('Medellín');
const city5 = new City('Jamuncho');

//Graph instance
const raiz = new Graph();

//Creating people
const person1 = new Person('Charlie', 19, city1);
const person2 = new Person('Laura', 24, city2);
const person3 = new Person('Michelle', 19, city2);
const person4 = new Person('Valentina', 23, city4);
const person5 = new Person('Tomás', 25, city3);
const person6 = new Person('Andrés', 18, city2);
const person7 = new Person('Nicole', 20, city5);
const person8 = new Person('Alejandro', 23, city1);


//Add people and cities to raiz
raiz.addNode(person1);
raiz.addNode(city1);
raiz.addNode(person2);
raiz.addNode(city2);
raiz.addNode(person3);
raiz.addNode(city3);
raiz.addNode(person4);
raiz.addNode(city4);
raiz.addNode(person5);
raiz.addNode(city5);
raiz.addNode(person6);
raiz.addNode(person7);
raiz.addNode(person8);

//Add edges
raiz.addEdge(person1, city1);
raiz.addEdge(person2, city2);
raiz.addEdge(person3, city2);
raiz.addEdge(person4, city4);
raiz.addEdge(person5, city3);
raiz.addEdge(person6, city2);
raiz.addEdge(person7, city1);
raiz.addEdge(person8, city3);

//Print graph
console.log(raiz.peopleInCity(city1.name));
