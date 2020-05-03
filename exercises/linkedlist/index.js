// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    //the node will be called with two properties: data & next node along the chain 
    //if anyone makes a node, but did not pass the next one to link, then we can refer it as null
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkedList {
    constructor() {
        //the only property that LinkedList requires 
        this.head = null
    }
    insertFirst(data) {
        // // we are pushing a new head but we don't want to get rid of the data that was already there, so we pass through as next
        // const node = new Node(data, this.head)
        // //now this will be the new head, we replace it. 
        // this.head = node

        this.insertAt(data, 0)
    }

    size() {
        //this is will the couter that will tells us how many nodes are inside
        let count = 0;
        //this a reference to the first node in the linked list 
        let node = this.head

        //while there's a node inside the head, we will add to the counter, if head is empty then it won't go through
        //the while loop and return 0 
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    getFirst() {
        // return this.head;
        return this.getAt(0)
    }

    getLast() {
        // //if we don't have any nodes
        // if (!this.head) {
        //     return null
        // }

        // let node = this.head
        // while (node) {
        //     //if node next is not defined, that means that it is the last node in the linked list
        //     if (!node.next) {
        //         return node
        //     }
        //     // we want to keep iterating through the list while there is a next node linked
        //     node = node.next
        // }

        return this.getAt(this.size() - 1)
    }

    clear() {
        //in order to clear the linked list, we just need to change the head
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return
        }

        // if there is only one node?
        if (!this.head.next) {
            this.head = null
            return
        }

        //if there is more than two?
        let previous = this.head
        let node = this.head.next
        //as long as this next node exist, we need to keep looping
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null
    }

    insertLast(data) {
        const last = this.getLast()

        if (last) {
            //There are some existing nodes in our chain
            //it will be a new node because this will be a whole new data
            last.next = new Node(data)
        } else {
            //The chain is empty 
            this.head = new Node(data)
        }
    }

    getAt(index) {
        let counter = 0
        let node = this.head

        while (node) {
            if (counter === index) {
                return node
            } else {
                counter++
                node = node.next
            }
        }
        //you asked for a node that can't be finded by the given index 
        return null;
    }

    //this one is going to be a tough one, lots of edge cases
    removeAt(index){
        // if there is no nodes
        if(!this.head){
            return 
        }

        if(index === 0){
        this.head = this.head.next
        return 
        }

        const previous = this.getAt(index - 1)
        if(!previous || !previous.next){
            return;
        }
        //this is going to look at the next next node
        previous.next = previous.next.next
    }

    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data)
            return
        }

        if(index === 0){
            //replace the previous head to the next of the new node head
            this.head = new Node (data,this.head)
            return
        }

        //this is saying that if the getAt index is a falsy or out of bound
        //then we would look at the last index and then push this new node to the end of the list 
        const previous = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next = node


    }

    forEach(fn){
        let node = this.head
        let counter = 0
        while(node){
            fn(node,counter)
            node = node.next
            counter++
        }

    }

    *[Symbol.iterator](){
        let node = this.head
        while (node){
            yield node;
            node = node.next
        }

    }

}

module.exports = { Node, LinkedList };
