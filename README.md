# Challenge 03 - Book Stack Management

> Create and manage a stack of books with complete book information

## 🎯 Objective

Implement a stack data structure to manage books, where each book contains ISBN, title, author, and editorial information.

## 📁 Files

- `challenge_03.js` - Book stack implementation

## 🔧 Implementation

**Book Class:**

```javascript
class Book{
    constructor(isbn, title, autor, editorial){
        this.isbn = isbn;
        this.title = title;
        this.autor = autor;
        this.editorial = editorial;
    }
}
```

**Books Stack Class with methods:**

- `agregarLibro(isbn, title, autor, editorial)` - Add book to stack
- `eliminarLibro(isbn)` - Remove book from stack (pop)
- `consultarUltimo()` - Get last book in stack
- `size()` - Get total number of books
- `print()` - Display all books

## 🚀 Usage

```bash
node challenge_03.js
```

## 🎓 Concepts

- Stack data structure (LIFO)
- Class-based programming
- Array-based stack implementation
- Book catalog management
- Push/Pop operations

---

**Challenge 03** - Data Structures and Algorithms II
