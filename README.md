# Challenge 05 - Family Tree Implementation

> Create and manage a family tree with three generations using tree traversal methods

## 🎯 Objective

Implement a family tree data structure with Person nodes containing full name and birthdate, supporting multiple children per person and three tree traversal methods.

## 📁 Files

- `challenge_05.js` - Family tree implementation

## 🔧 Implementation

**Person Class:**

```javascript
class Person {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
        this.children = [];
    }
}
```

**FamilyTree Class with methods:**

- `search(name, node)` - Find person by name in tree
- `insert(value, parent)` - Add new person to tree
- `preOrder(node)` - Traverse tree in pre-order (root → children)
- `postOrder(node)` - Traverse tree in post-order (children → root)
- `inOrder(node)` - Traverse tree in in-order (left → root → right)

## 🚀 Usage

```bash
node challenge_05.js
```

## 🎓 Concepts

- Tree data structure
- N-ary tree (multiple children per node)
- Tree traversal algorithms
- Recursive tree operations
- Family genealogy modeling

---

**Challenge 05** - Data Structures and Algorithms II
