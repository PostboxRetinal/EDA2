/*
Create and handle new queue of people in one ATM.

✓Every person in the ATM must have its name and arrived time.
✓Fill the queue with some examples of data
*/

class atm{
    constructor(){
        this.queue = [];
    }
    parseTime(time) {
        //Función para convertir la hora en minutos después de medianoche y poder comparar los tiempos
        //
        const [horas, minutos] = time.split(':').map(Number);
        return horas * 60 + minutos;
    }
    enqueue(customer) {
        const customerTime = this.parseTime(customer.arriveTime); //ejecutar la función parseTime
        let inserted = false; //variable para saber si se insertó el cliente

        for (let i = 0; i < this.queue.length; i++) {
            if (this.parseTime(this.queue[i].arriveTime) > customerTime) {
                this.queue.splice(i, 0, customer);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            this.queue.push(customer);
        }

        return this.queue.length;
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

//Agregar clientes
console.log(`Cliente #${atmQueue.enqueue({name: 'Eduardo', arriveTime: '10:00'})} agregado`);
console.log(`Cliente #${atmQueue.enqueue({name: 'Maryo', arriveTime: '15:31'})} agregado`);
console.log(`Cliente #${atmQueue.enqueue({name: 'Carlos', arriveTime: '09:05'})} agregado`);
console.log(`Cliente #${atmQueue.enqueue({name: 'Nicolas', arriveTime: '21:03'})} agregado`);
console.log(`Cliente #${atmQueue.enqueue({name: 'Alejandro', arriveTime: '05:35'})} agregado`);

console.log(`\nPrimer elemento del arreglo: ${JSON.stringify(atmQueue.peek(),null,1)}\n`); //mostrar el primer elemento, usando JSON.stringify ya que es un objeto
for (x in atmQueue.queue){
    console.log(`Cliente: ${JSON.stringify(atmQueue.queue[x].name)} | Hora de llegada: ${JSON.stringify(atmQueue.queue[x].arriveTime)}`);
}


