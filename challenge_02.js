/*
Create and handle new list of TODOs.

Every task must have its title, description, and points to next TODO.
Fill the list with some data and print all TODOs
*/
class Tasks {
	constructor(task, description, next = null) {
		this.task = task;
		this.description = description;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(title, description) {
		const newTask = new Tasks(title, description);

		if (!this.head) {
			this.head = newTask;
		} else {
			this.tail.next = newTask;
		}
		this.tail = newTask;
	}

	peek(title, current = this.head) {
		if (!current) {
			return false;
		}
		if (current.task !== null) {
			return current;
		}
		return this.peek(title, current.next);
	}

	size(current = this.head, acum = 0) {
		if (!current) {
			return acum;
		}
		return this.size(current.next, acum + 1);
	}

	removeAlternative(title, current = this.head, prev = null) {
		if (current == null) {
			return false;
		}
		if (current.task === title) {
			if (prev == null) {
				// Removing the head
				this.head = current.next;
			} else {
				prev.next = current.next;
			}
			if (current.next == null) {
				// Removing the tail
				this.tail = prev;
			}
			return true;
		}
		return this.removeAlternative(title, current.next, current);
	}

	print() {
		let task = this.head;
		while (task != null) {
			console.log(
				`Tarea: ${task.task} | Descripción: ${task.description} | Siguiente: (${
					task.next ? task.next.task : 'null'
				})`
			);
			task = task.next;
		}
	}
}

// Testing
const TODOlist = new LinkedList();
TODOlist.append('Deberes', 'Limpiar la estufa');
TODOlist.append('EDA2 | Adelanto', 'Terminar los challenges');
TODOlist.append('PENDING', 'Comprar el regalo');
TODOlist.append('DONE', 'Repasar INO1');

console.log(`Size: ${TODOlist.size()}`);
TODOlist.print();
console.log(`\nRemoved 'DONE' task?: ${TODOlist.removeAlternative('DONE')}`);

