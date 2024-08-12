/*
Description:
- LinkedList challenge.
*/
class Tasks{
    constructor(task, description, next = null){
        this.task = task;
        this.description = description;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(title, description){
        const newTask = new Tasks(title, description);

        if(!this.head){
            this.head = newTask;
        }   else{
            this.tail.next = newTask;
        }
        this.tail = newTask;
    }

    peek(title, current = this.head){
        if(!current){
            return null;
        }
        if(current.title !== null){
            return this.peek(title, current.next);
        }
    }
    

    size(current = this.head, acum = 0){
        if(this.head === null){
            return 0;
        }
        if (current.next !== null){
            return this.size(current.next, acum += 1);
        }
        return acum;
    }

    remove(title, current = this.head){
        if(current === null){
            return false;
        }
        if(this.head.title === title){
            return this.head = this.head.next;
        }

        if(current.next !== null){
            if(current.next.title === title){
                current.next = current.next.next;
                return true;
            }   else{
            return this.remove(title, current.next);
            }
        }
    }

    print(){
        let task = this.head;
        while(task != null){
            console.log( `Tarea: ${task.task} | Descripción: ${task.description} | Siguiente: ${task.next?.title || "null"}`);
            task = task.next;
        }
    }

}

// Testing

const list = new LinkedList();
list.append("Tarea1", "Description 1");
list.append("Tarea3", "Description 3");
list.append("Tarea5", "Description 5");

console.table(list);
console.log("Peek: " + list.peek("Tarea1"));
console.log("Size: " + list.size()); 
console.log("Remove: " + list.remove("Tarea4"));
console.log("List after remove:", list.print());