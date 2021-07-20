class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;  // there won't be head and tail like in linked list
    }
    // inserting a new value in binary tree
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = mewNode;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value === current.value) return false;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left;
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    else{
                        current = current.right;
                    }
                }
            }
        }
    }
    //search a value in BST
    search(value){
        if(value === null || this.root === null){
            return false;
        }
        var current = this.root;

        while(true){
            if(current.value === value){
                return current;
            }
            if(value < current.value){
                if(current.left === null){
                    return false;
                }else{
                    current = current.left;
                }
            }else{
                if(current.right === null){
                    return false;
                }else{
                    current = current.right;
                }
            }
        }
    }
    /*
            10
        6       15
      3   8        20
    */

    //Breadth first Search
    BFS(){
        if(this.root === null){
            return undefined;
        }
        var node = this.root,
            data = [],
            queue = [];
        
            //push the root node to queue
            queue.push(node);
            while(queue.length){
                node = queue.shift();
                data.push(node.value);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            return data;
    }
    //data[10,6,15,3,8,20]

    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }
    //data[10,6,3,8,15,20]

    /*
            10
        6       15
      3   8        20
    */

    DFSPostOrder(){
        var data = [];
        var current = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);
    }
    // data[3,8,6,20,15,10]

    /*
            10
        6       15
      3   8        20
    */

    DFSFirstInOrder(){
        var data = [];
        var current = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);  
        }

        traverse(current);
    }
    //data[3,6,8,10,15,20]
}


//queue[]
//data[10,6,15,3,8,20]







///Implementation

// var tree = new BinarySearchTree();
//tree.insert(10);
//tree.insert(1);
//tree.insert(15);
//tree.insert(6);
//O(log n) -- time complexity