// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
    this.data = data;
    this.children = []
    }
//creating a new node and storing it to the children array 
    add(data){
        const node = new Node(data)
        this.children.push(node)
    }
//we are filtering through to get rid of the requested data but remember to make the changes 
//on the children array
    remove(data){
        this.children = this.children.filter(node => {
            return node.data !== data
        })
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    traverseBF(fn){
        //create an empty array but call in the root
        const array = [this.root]
        //as long as array has something in it
        while(array.length){
            //this will take out the first element in an array 
            const node = array.shift()
            //the spread operator will not push in an array , instead will go 
            //through each child and push them individually 
          array.push(...node.children)
          //then whatever funcation we want to imply can be done in order to each node
          fn(node)
        }
    }

    traverseDF(fn){
        const array = [this.root]

        while(array.length){
            let node = array.shift();
            //now we push in the front of the array the children of each node
            array.unshift(...node.children);
            fn(node)
        }
    }
}

module.exports = { Tree, Node };
