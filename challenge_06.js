class city{
    constructor(name){
        this.name = name;
        this.nodes = [];
        this.adjList = {};
       }

    addNode(node){
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2){
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    printGraph(){

    }

    searchNode(value){
        if (!this.nodes.length){
            return null;
        }
        return this.nodes.find(item => item === value);
    }

    printAdjacency(value){
        if( this.searchNode(value)){
            console.log(this.adjList[value])
        } else {
            return null;
        }
    }
}

class person{
    constructor(name, Age){
        this.name = name;
        this.Age = Age;
        this.city = city;
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node){
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2){
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

}

