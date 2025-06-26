# Challenge 06 - People and Cities Graph

> Create and manage a graph connecting people to cities with adjacency list representation

## 🎯 Objective

Implement a graph data structure to represent relationships between people and cities, allowing queries to find people located in specific cities.

## 📁 Files

- `challenge_06.js` - Graph implementation with people and cities

## 🔧 Implementation

**Person Class:**

```javascript
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
```

**Graph Class with methods:**

- `addNode(node)` - Add person or city to graph
- `addEdge(node1, node2)` - Create connection between nodes
- `printGraph()` - Display complete adjacency list
- `searchNode(value)` - Find specific node in graph
- `printAdjacencyList(node)` - Show connections for specific node
- `peopleInCity(cityName)` - Find all people in specified city

## 🚀 Usage

```bash
node challenge_06.js
```

## 🎓 Concepts

- Graph data structure
- Adjacency list representation
- Undirected graph
- Node relationships
- Graph traversal and filtering

---

**Challenge 06** - Data Structures and Algorithms II
