# Challenge 04 - ATM Queue Management

> Create and manage a priority queue for ATM customers based on arrival time

## 🎯 Objective

Implement a priority queue data structure to manage ATM customers, where each person has name and arrival time, automatically sorted by earliest arrival.

## 📁 Files

- `challenge_04.js` - ATM queue implementation

## 🔧 Implementation

**ATM Class with methods:**

- `parseTime(time)` - Convert time format to minutes for comparison
- `enqueue(customer)` - Add customer in priority order by arrival time
- `dequeue()` - Remove and return first customer in queue
- `peek()` - Get first customer without removing
- `size()` - Get total number of customers
- `isEmpty()` - Check if queue is empty
- `print()` - Display all customers

**Customer Object Structure:**

```javascript
{
    name: 'Eduardo',
    arriveTime: '10:00'
}
```

## 🚀 Usage

```bash
node challenge_04.js
```

## 🎓 Concepts

- Priority Queue data structure
- Time parsing and comparison
- Automatic sorting on insertion
- FIFO with priority ordering
- Queue operations (enqueue/dequeue)

---

**Challenge 04** - Data Structures and Algorithms II
