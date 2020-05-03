// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        //whenever we create an instance of a Queue, we will automatically generate 2 stacks and 
        //assign it to this Queue class 
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record)
    }
    remove() {
        //as long as this keep returning a value right here, we will pop out a record 
        //then push it to our second stack 
        while (this.first.peek()) {
            this.second.push(this.first.pop())
            //once this loop is over, we have it on stack 2 
        }
        //this will be the record we want to pull - the last in
        //before we return , we want to restore our stack back to stack first without the record we just popped
        const record = this.second.pop()
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
            //once this loop is over, we have it on stack 2 
        }
        //this will be the record we want to pull - the last in
        //before we return , we want to restore our stack back to stack first without the record we just popped
        const record = this.second.peek() //this method is already declared on Stack
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return record;
    }
}

module.exports = Queue;
