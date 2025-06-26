# Challenge 02 - TODO List with Linked List

> Create and manage a TODO list using linked list data structure with tasks

## 🎯 Objective

Implement a linked list to manage TODO tasks, where each task contains title, description, and pointer to the next task.

## 📁 Files

- `challenge_02.js` - TODO linked list implementation

## 🔧 Implementation

**Task Class:**

```javascript
class Tasks {
    constructor(task, description, next = null) {
        this.task = task;
        this.description = description;
        this.next = next;
    }
}
```

**LinkedList Class with methods:**

- `append(title, description)` - Add new task
- `peek(title)` - Find task by title
- `size()` - Count total tasks
- `removeAlternative(title)` - Remove task by title
- `print()` - Display all tasks

## 🚀 Usage

```bash
node challenge_02.js
```

## 🎓 Concepts

- Linked List data structure
- Class-based programming
- Node traversal and manipulation
- Recursive methods (size, peek, remove)
- Head and tail pointers

---

**Challenge 02** - Data Structures and Algorithms II
