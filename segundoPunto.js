/*
2.	Modificar el algoritmo de árboles binarios, implementar una función para calcular la altura de un árbol.
*/
class arbolBinario {
	constructor(root = 0, leftChildren = null, rightChildren = null) {
		this.root = root;
		this.leftChildren = leftChildren;
		this.rightChildren = rightChildren;
	}
}
function calculateHeight(root) {
	if (root === null) {
		return 0;
	}

	//es un método recursivo, sólo cambio los nombres de las propiedades
	const leftHeight = calculateHeight(root.leftChildren);
	const rightHeight = calculateHeight(root.rightChildren);

    /*
    Devuelve el valor más grande entre leftHeight y rightHeight. 
    Sumo 1 para contar el nodo raíz
    */
	return Math.max(leftHeight, rightHeight) + 1;
}

const node7 = new arbolBinario(7);
const node8 = new arbolBinario(8);
const node9 = new arbolBinario(9);
const node10 = new arbolBinario(10);
const node11 = new arbolBinario(11);
const node12 = new arbolBinario(12);
const node13 = new arbolBinario(13);
const node14 = new arbolBinario(14);
const node15 = new arbolBinario(15);

const node4 = new arbolBinario(4, node8, node9);
const node5 = new arbolBinario(5, node10, node11);
const node6 = new arbolBinario(6, node12, node13);
const node2 = new arbolBinario(2, node4, node5);
const node3 = new arbolBinario(3, node14, node15);
const root = new arbolBinario(1, node2, node3);

//aqui se crea una instancia de arbolBinario con root como su raíz
const height = calculateHeight(root);
console.log(`La altura del árbol es: ${height}`);
