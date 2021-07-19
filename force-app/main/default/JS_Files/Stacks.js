//Implementation through Array
// var stack = [];
// stack.push('google');
// stack.push('instagram');
// stack.push('youtube');
// stack.pop();
// stack.pop();
// stack.pop();
// ////we can also use shift and unshift
// stack.unshift('facebook');
// stack.unshift('linkedIn');
// stack.unshift('twitter');
// stack.shift();

//Implementation through LinkedList

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //pushing value in the stack
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    //popping first value
    pop(){
        if(!this.first){
            return null;
        }
        var temp = this.first;
        if(this.first.next === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;

    }
}

/*
BIG O of Stacks
Insertion - O(1)
Removal- O(1)
Searching - O(n)
access - O(n)
*/
