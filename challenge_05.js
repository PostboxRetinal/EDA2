/*
Create and handle your family tree until your third pre-generation, think there is
only one person to make next generation (mom or dad).

✓ Every person must have a full name and birthdate.
✓ Every person could have more than one child
✓ Print your family tree in pre-order, post order and in-order
*/

class Person {
	constructor(name, birthdate) {
		this.name = name;
		this.birthdate = birthdate;
		this.children = [];
	}
}

class FamilyTree {
	constructor(root) {
		this.root = root;
	}

	search(name, node = this.root) {
		if (!this.root) {
			return null;
		}

		if (this.root.name === name) {
			return this.root;
		} else {
			const children = node.children;
			const inChildren = children.find((item) => item.name === name);
			if (inChildren) {
				return inChildren;
			} else {
				let hasChild;
				children.forEach((item) => {
					if (hasChild) {
						return;
					}
					hasChild = this.search(name, item);
				});
				return hasChild;
			}
		}
	}

	insert(value, parent) {
		const newNode = new Person(value);

		if (!parent) {
			if (!this.root) {
				this.root = newNode;
			} else {
				return null;
			}
		} else {
			const parentNode = this.search(parent);
			parentNode.children.push(newNode);
		}
	}

	preOrder(node = this.root) {
		if (!node) {
			return;
		}
		console.log(node.name);

		node.children.forEach((child) => {
			this.preOrder(child);
		});
	}

	postOrder(node = this.root) {
		if (!node) {
			return;
		}
		node.children.forEach((child) => {
			this.postOrder(child);
		});
		console.log(node.name);
	}

	inOrder(node = this.root) {
		if (!node) {
			return;
		}
		if (node.children.length === 0) {
			console.log(node.name);
		} else {
			if (node.children.length > 0) {
				this.inOrder(node.children[0]);
			}
			console.log(node.name);
			for (let i = 1; i < node.children.length; i++) {
				this.inOrder(node.children[i]);
			}
		}
	}
}

// Inserts the family members
const grandMother1 = new Person('Amelia Sandoval', '1957-16-20');
const grandFather1 = new Person('Victor Daniel Balanta', '1948-04-13');
const grandMother2 = new Person('Rosa Velasquez', '1942-10-21');
const grandFather2 = new Person('Victor Gutiérrez', '1945-03-25');
const mom = new Person('Gladys Yaneth Gutiérrez Velásquez', '1967-04-03');
const dad = new Person('Victor Alexis Balanta Sandoval', '1976-10-10');
const currentDev = new Person('Sebastian Balanta', '2001-09-11');
const devsBrother = new Person('Camilo Balanta', '2006-01-10');

// Creates the family tree
const familyTree = new FamilyTree(grandMother1);

// Inserts the family members into the family tree
grandMother1.children.push(dad);
grandFather1.children.push(dad);
grandFather2.children.push(mom);
grandMother2.children.push(mom);
mom.children.push(currentDev);
dad.children.push(devsBrother);

// Prints the family tree
console.log(`preOrder: ${familyTree.preOrder()}\n`);
console.log(`postOrder: ${familyTree.postOrder()}\n`);
console.log(`inOrder: ${familyTree.inOrder()}\n`);
