class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Pushing a new Node at end
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
            this.length++;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
        }

        return this;
    }

    //Popping a node from end
    pop(){
        if(!this.tail){
            return undefined;
        }
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            return null;
        }
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
        this.length--;
        return poppedNode;
    }

    //Remove the node from beginning
    shift(){
        if(!this.head){
            return undefined;
        }

        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //Add node to the start
    unshift(val){
        var newNode = new Node(val);
        if(!head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //Get the node at specific index
    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length/2)
        {   
            var curNode = this.head;
            var count = 0;
            while(count != index){
                curNode = curNode.next;
                count++;
            }
        }else{
            var curNode = this.tail;
            var count = this.length -1 ;
            while(count != index){
                curNode = curNode.prev;
                count--;
            }
        }

        return curNode;
    }
    //set the value
    set(val,index){
        var indexedNode = this.get(index);  //use this to give the context of the current linked list
        if(!indexedNode){
            return false;
        }else{
            indexedNode.val = val;
            return true;
        }
    }

    //insert a node at certain index
    insert(val, index){
        if(index < 0  || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);            //typecasting the value into boolean
        if(index === this.length) return !!this.push(val);
        var newNode = new Node(val);
        var beforeNode = this.get(index -1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    //remove the node
    remove(index){
        if(index < 0 || index >= this.length) returned undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();

        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}


list = new DoublyLinkedList();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.pop());
