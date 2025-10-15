/**
 * Array Stack & Queue Methods: push(), pop(), shift(), unshift()
 * 
 * Description:
 * - push(): Adds elements to the end of an array
 * - pop(): Removes and returns the last element
 * - shift(): Removes and returns the first element
 * - unshift(): Adds elements to the beginning of an array
 * 
 * Syntax:
 * - array.push(element1, element2, ..., elementN)
 * - array.pop()
 * - array.shift()
 * - array.unshift(element1, element2, ..., elementN)
 * 
 * Returns:
 * - push(): New length of the array
 * - pop(): The removed element (undefined if array is empty)
 * - shift(): The removed element (undefined if array is empty)
 * - unshift(): New length of the array
 * 
 * ⚠️ ALL THESE METHODS MUTATE THE ORIGINAL ARRAY!
 * 
 * Time Complexity:
 * - push(): O(1)
 * - pop(): O(1)
 * - shift(): O(n) - must reindex all elements
 * - unshift(): O(n) - must reindex all elements
 * 
 * Space Complexity: O(1)
 */

// ========================================
// ARRAY.PROTOTYPE.PUSH() EXAMPLES
// ========================================

console.log("=== Array.push() Examples ===\n");

// Example 1: Basic push() usage
console.log("Example 1: Basic push()");

const fruits = ["apple", "banana"];
console.log("Before push:", fruits);

const newLength = fruits.push("cherry");
console.log("After push('cherry'):", fruits);
console.log("New length:", newLength);

fruits.push("date", "elderberry");
console.log("After push('date', 'elderberry'):", fruits);
console.log();

// Example 2: Push with different data types
console.log("Example 2: Pushing different types");

const mixed = [];
mixed.push(42);
mixed.push("hello");
mixed.push({ name: "object" });
mixed.push([1, 2, 3]);
mixed.push(true);
mixed.push(null);

console.log("Mixed array:", mixed);
console.log("Length:", mixed.length);
console.log();

// Example 3: Building arrays dynamically
console.log("Example 3: Building arrays");

const squares = [];
for (let i = 1; i <= 5; i++) {
    squares.push(i * i);
}

console.log("Squares:", squares);

// Building from data
const users = [];
["Alice", "Bob", "Charlie"].forEach(name => {
    users.push({ name, id: users.length + 1 });
});

console.log("Users:", users);
console.log();

// ========================================
// ARRAY.PROTOTYPE.POP() EXAMPLES
// ========================================

console.log("=== Array.pop() Examples ===\n");

// Example 4: Basic pop() usage
console.log("Example 4: Basic pop()");

const numbers = [1, 2, 3, 4, 5];
console.log("Before pop:", numbers);

const lastNumber = numbers.pop();
console.log("After pop():", numbers);
console.log("Removed element:", lastNumber);

numbers.pop();
numbers.pop();
console.log("After two more pops:", numbers);
console.log();

// Example 5: Pop from empty array
console.log("Example 5: Pop from empty array");

const empty = [];
const removed = empty.pop();
console.log("Pop from empty array:", removed); // undefined
console.log("Array after pop:", empty);
console.log();

// Example 6: Using pop in a loop
console.log("Example 6: Processing with pop");

const stack = [10, 20, 30, 40];
console.log("Initial stack:", stack);

console.log("Processing (LIFO):");
while (stack.length > 0) {
    const item = stack.pop();
    console.log(`  Processed: ${item}, Remaining:`, stack);
}
console.log();

// ========================================
// ARRAY.PROTOTYPE.SHIFT() EXAMPLES
// ========================================

console.log("=== Array.shift() Examples ===\n");

// Example 7: Basic shift() usage
console.log("Example 7: Basic shift()");

const colors = ["red", "green", "blue", "yellow"];
console.log("Before shift:", colors);

const firstColor = colors.shift();
console.log("After shift():", colors);
console.log("Removed element:", firstColor);

colors.shift();
console.log("After another shift:", colors);
console.log();

// Example 8: Queue processing
console.log("Example 8: Queue processing (FIFO)");

const queue = ["First", "Second", "Third", "Fourth"];
console.log("Initial queue:", queue);

console.log("Processing (FIFO):");
while (queue.length > 0) {
    const item = queue.shift();
    console.log(`  Processed: ${item}, Remaining:`, queue);
}
console.log();

// Example 9: Shift performance consideration
console.log("Example 9: Shift performance warning");

const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before shift:", largeArray);

console.time("shift() operation");
largeArray.shift(); // O(n) - reindexes all elements
console.timeEnd("shift() operation");

console.log("After shift:", largeArray);
console.log("⚠️  shift() is O(n) - avoid in performance-critical code");
console.log();

// ========================================
// ARRAY.PROTOTYPE.UNSHIFT() EXAMPLES
// ========================================

console.log("=== Array.unshift() Examples ===\n");

// Example 10: Basic unshift() usage
console.log("Example 10: Basic unshift()");

const animals = ["cat", "dog"];
console.log("Before unshift:", animals);

const newLen = animals.unshift("bird");
console.log("After unshift('bird'):", animals);
console.log("New length:", newLen);

animals.unshift("fish", "hamster");
console.log("After unshift('fish', 'hamster'):", animals);
console.log();

// Example 11: Prepending items
console.log("Example 11: Prepending to array");

const list = [3, 4, 5];
console.log("Original list:", list);

list.unshift(2);
console.log("After unshift(2):", list);

list.unshift(0, 1);
console.log("After unshift(0, 1):", list);
console.log();

// Example 12: Unshift performance
console.log("Example 12: Unshift performance");

const perfArray = [1, 2, 3, 4, 5];
console.log("Before unshift:", perfArray);

console.time("unshift() operation");
perfArray.unshift(0); // O(n) - reindexes all elements
console.timeEnd("unshift() operation");

console.log("After unshift:", perfArray);
console.log("⚠️  unshift() is O(n) - avoid in performance-critical code");
console.log();

// ========================================
// STACK IMPLEMENTATION (LIFO)
// ========================================

console.log("=== Stack Implementation (LIFO - Last In First Out) ===\n");

class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
    }
    
    print() {
        console.log(this.items.toString());
    }
}

// Using the stack
const stack1 = new Stack();

console.log("Pushing elements:");
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.print(); // 10,20,30

console.log("Peek (top element):", stack1.peek()); // 30
console.log("Pop:", stack1.pop()); // 30
stack1.print(); // 10,20

console.log("Size:", stack1.size()); // 2
console.log("Is empty:", stack1.isEmpty()); // false
console.log();

// ========================================
// QUEUE IMPLEMENTATION (FIFO)
// ========================================

console.log("=== Queue Implementation (FIFO - First In First Out) ===\n");

class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element); // Add to end
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift(); // Remove from front
    }
    
    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    print() {
        console.log(this.items.toString());
    }
}

// Using the queue
const queue1 = new Queue();

console.log("Enqueueing elements:");
queue1.enqueue("A");
queue1.enqueue("B");
queue1.enqueue("C");
queue1.print(); // A,B,C

console.log("Front element:", queue1.front()); // A
console.log("Dequeue:", queue1.dequeue()); // A
queue1.print(); // B,C

console.log("Size:", queue1.size()); // 2
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Undo/Redo functionality
console.log("Use Case 1: Undo/Redo (Stack)");

class UndoRedoManager {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }
    
    execute(action) {
        this.undoStack.push(action);
        this.redoStack = []; // Clear redo stack
        console.log(`  Executed: ${action}`);
    }
    
    undo() {
        if (this.undoStack.length === 0) {
            console.log("  Nothing to undo");
            return;
        }
        const action = this.undoStack.pop();
        this.redoStack.push(action);
        console.log(`  Undid: ${action}`);
    }
    
    redo() {
        if (this.redoStack.length === 0) {
            console.log("  Nothing to redo");
            return;
        }
        const action = this.redoStack.pop();
        this.undoStack.push(action);
        console.log(`  Redid: ${action}`);
    }
}

const manager = new UndoRedoManager();
manager.execute("Type 'Hello'");
manager.execute("Type 'World'");
manager.execute("Delete 'World'");
manager.undo();
manager.undo();
manager.redo();
console.log();

// Use Case 2: Task queue
console.log("Use Case 2: Task processing queue");

class TaskQueue {
    constructor() {
        this.tasks = [];
    }
    
    addTask(task) {
        this.tasks.push(task);
        console.log(`  Added task: ${task.name}`);
    }
    
    processNext() {
        if (this.tasks.length === 0) {
            console.log("  No tasks to process");
            return null;
        }
        const task = this.tasks.shift();
        console.log(`  Processing task: ${task.name}`);
        return task;
    }
    
    getPending() {
        return this.tasks.length;
    }
}

const taskQueue = new TaskQueue();
taskQueue.addTask({ name: "Send email" });
taskQueue.addTask({ name: "Update database" });
taskQueue.addTask({ name: "Generate report" });

console.log(`Pending tasks: ${taskQueue.getPending()}`);
taskQueue.processNext();
taskQueue.processNext();
console.log(`Pending tasks: ${taskQueue.getPending()}`);
console.log();

// Use Case 3: Browser history
console.log("Use Case 3: Browser history simulation");

class BrowserHistory {
    constructor() {
        this.history = [];
        this.currentIndex = -1;
    }
    
    visit(url) {
        // Remove any forward history
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(url);
        this.currentIndex++;
        console.log(`  Visited: ${url}`);
    }
    
    back() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            console.log(`  Back to: ${this.history[this.currentIndex]}`);
            return this.history[this.currentIndex];
        }
        console.log("  Can't go back");
        return null;
    }
    
    forward() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            console.log(`  Forward to: ${this.history[this.currentIndex]}`);
            return this.history[this.currentIndex];
        }
        console.log("  Can't go forward");
        return null;
    }
}

const browser = new BrowserHistory();
browser.visit("google.com");
browser.visit("youtube.com");
browser.visit("github.com");
browser.back();
browser.back();
browser.forward();
browser.visit("stackoverflow.com");
browser.back();
console.log();

// Use Case 4: Print queue
console.log("Use Case 4: Printer queue");

const printQueue = [];

function addPrintJob(job) {
    printQueue.push(job);
    console.log(`  Added to queue: ${job.document}`);
}

function processPrintJob() {
    if (printQueue.length === 0) {
        console.log("  Queue is empty");
        return;
    }
    const job = printQueue.shift();
    console.log(`  Printing: ${job.document} (${job.pages} pages)`);
}

addPrintJob({ document: "Report.pdf", pages: 10 });
addPrintJob({ document: "Invoice.pdf", pages: 2 });
addPrintJob({ document: "Letter.pdf", pages: 1 });

console.log(`Jobs in queue: ${printQueue.length}`);
processPrintJob();
processPrintJob();
console.log(`Jobs in queue: ${printQueue.length}`);
console.log();

// ========================================
// PERFORMANCE COMPARISON
// ========================================

console.log("=== Performance Comparison ===\n");

// push vs unshift
const testSize = 10000;

console.time("push() 10000 items");
const pushArray = [];
for (let i = 0; i < testSize; i++) {
    pushArray.push(i);
}
console.timeEnd("push() 10000 items");

console.time("unshift() 10000 items");
const unshiftArray = [];
for (let i = 0; i < testSize; i++) {
    unshiftArray.unshift(i);
}
console.timeEnd("unshift() 10000 items");

console.log("push() is much faster! ✓");
console.log();

// pop vs shift
const popArray = Array.from({ length: testSize }, (_, i) => i);
const shiftArray = Array.from({ length: testSize }, (_, i) => i);

console.time("pop() 10000 items");
while (popArray.length > 0) {
    popArray.pop();
}
console.timeEnd("pop() 10000 items");

console.time("shift() 10000 items");
while (shiftArray.length > 0) {
    shiftArray.shift();
}
console.timeEnd("shift() 10000 items");

console.log("pop() is much faster! ✓");
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. push() and pop() are O(1) - very efficient");
console.log("2. shift() and unshift() are O(n) - avoid with large arrays");
console.log("3. All four methods mutate the original array");
console.log("4. Use push()/pop() for stack operations (LIFO)");
console.log("5. Use push()/shift() for queue operations (FIFO)");
console.log("6. pop() and shift() return undefined for empty arrays");
console.log("7. push() and unshift() return the new length");
console.log("8. For performance, prefer push() over unshift()");
console.log("9. Use spread operator for non-mutating alternatives");
console.log("10. Consider using a proper Queue class for frequent FIFO operations");

console.log("\n=== Common Patterns ===");

// Pattern 1: Remove last N elements
const removeLast = (arr, n) => {
    const removed = [];
    for (let i = 0; i < n && arr.length > 0; i++) {
        removed.push(arr.pop());
    }
    return removed;
};

// Pattern 2: Add if not exists
const addUnique = (arr, item) => {
    if (!arr.includes(item)) {
        arr.push(item);
    }
};

// Pattern 3: Rotate array
const rotateRight = (arr) => {
    if (arr.length > 0) {
        arr.unshift(arr.pop());
    }
    return arr;
};

const rotateLeft = (arr) => {
    if (arr.length > 0) {
        arr.push(arr.shift());
    }
    return arr;
};

// Pattern 4: Stack peek
const peek = (arr) => arr[arr.length - 1];

// Pattern 5: Non-mutating push
const immutablePush = (arr, item) => [...arr, item];

console.log("\nPattern examples:");
const patternTest = [1, 2, 3, 4, 5];
console.log("Remove last 2:", removeLast([...patternTest], 2));
console.log("Rotate right:", rotateRight([...patternTest]));
console.log("Rotate left:", rotateLeft([...patternTest]));
console.log("Peek:", peek(patternTest));
console.log("Immutable push:", immutablePush(patternTest, 6));

