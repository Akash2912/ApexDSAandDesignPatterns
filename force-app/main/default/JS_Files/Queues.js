class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //add the node to the last of the list(queue)
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last= newNode;
        }
        return ++this.size;
    }

    //remove the node from the start of the list(queue)

    dequeue(){
        if(!this.first){
            return null;
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}

/*
BIG O
Insertion -O(1)
Removal - O(1)
searching - O(n)
access - O(n)
*/