class atm{
    constructor(){
        this.queue = [];
    }
    enqueue(persona){
        return this.queue.push(persona);
    }
    dequeue(){
        return this.queue.shift();
    }
    peek(){
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    print(){
        return this.queue;
    }
}

const atmQueue = new atm();
console.log(`Elemento # ${atmQueue.enqueue({name: 'Juan', arriveTime: '10:00'})} agregado`);
console.log(`Elemento # ${atmQueue.enqueue({name: 'Maryo', arriveTime: '15:31'})} agregado`);
console.log(`Elemento # ${atmQueue.enqueue({name: 'Carlos', arriveTime: '09:05'})} agregado`);

//console.log(atmQueue.dequeue());
console.log(`Último elemento del arreglo: ${JSON.stringify(atmQueue.peek())}\n`); //mostrar el último elemento
console.log(`Contenido del arreglo:\n${JSON.stringify(atmQueue.print())}`); //mostrar


