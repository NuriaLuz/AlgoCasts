// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        //create a storage where we will add out inputs
        this.data = []
    }
    //here we will push to the end of the array any new record
    push(record) {
        this.data.push(record)
    }
    //return an new array where the last input is removed
    pop() {
        return this.data.pop()
    }
     //return the last input in the array 
    peek() {
        return this.data[this.data.length - 1]

    }
}

module.exports = Stack;
