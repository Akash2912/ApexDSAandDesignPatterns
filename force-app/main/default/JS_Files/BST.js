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
}






///Implementation

// var tree = new BinarySearchTree();
//tree.insert(10);
//tree.insert(1);
//tree.insert(15);
//tree.insert(6);
//O(log n) -- time complexity