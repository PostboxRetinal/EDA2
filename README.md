# Data Structures and Algorithms II - Challenges

> JavaScript challenges and exercises for the Data Structures and Algorithms II course

## 📖 About

This branch contains a practical coding homework focused on JavaScript fundamentals and data structure operations. The exercise cover essential array methods and manipulations that form the foundation for more advanced algorithms.

## 📁 Contents

### 🔢 Array Homework (`arraysHomework.js`)

A comprehensive collection of JavaScript array method demonstrations including:

#### Array Methods Covered

- **`length`** - Returns the size of the array
- **`toString()`** - Converts array to comma-separated string
- **`pop()`** - Removes and returns the last element
- **`push()`** - Adds elements to the end of the array
- **`join()`** - Joins array elements into a string with specified delimiter
- **`shift()`** - Removes and returns the first element
- **`unshift()`** - Adds elements to the beginning of the array

#### Example Usage

```javascript
let frutas = ["Manzana", "Mango", "Lulo", "Maracuyá"];

// Get array size
let size = frutas.length;

// Convert to string
console.log(frutas.toString());

// Add element to end
frutas.push("Fresa");

// Remove first element
let firstFruit = frutas.shift();
```

## 🚀 How to Run

1. **Prerequisites**: Node.js installed on your system

2. **Clone and navigate**:

   ```bash
   git clone <repository-url>
   cd EDA2
   git checkout challenges
   ```

3. **Run the exercises**:

   ```bash
   node arraysHomework.js
   ```

## 🎯 Learning Objectives

- Master fundamental JavaScript array operations
- Understand array method return values and side effects
- Practice console output and debugging techniques
- Build foundation for advanced data structure implementations

## 📝 Exercise Structure

Each method demonstration includes:

- Method syntax and purpose
- Practical example with fruit names
- Console output showing results
- Comments explaining functionality

## 🔧 Technologies Used

- **JavaScript (ES6+)** - Core programming language
- **Node.js** - Runtime environment for execution
- **Console API** - For output and debugging

---

Made for learning JavaScript fundamentals (prior challenges)
