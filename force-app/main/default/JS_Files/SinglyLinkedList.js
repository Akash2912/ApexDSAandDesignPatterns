//one directional connection
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tale = null;
        this.length = 0;
    }
    //Pushing the new Node in End
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tale = newNode;
        }
        else{
            this.tale.next = newNode;
            this.tale = newNode;
        }
        this.length += 1;
        return this;
    }

    //Removing Last node

    pop(){
        if(!this.head){
            return undefined;
        }
        var current = this.head;
        var pre = current;
        while(current.next != null){
            pre = current;
            current = current.next;
        }

        pre.next = null;
        this.tale = pre;
        this.length -= 1;
        if(this.length === 0){
            this.head = null;
            this.tale= null;
        }
        return current;
    }
}

var list = new SinglyLinkedList();
list.push(30);
list.push(45);
list.push(55);
list.push(65);
list.push(75);
list.push(85);
console.log(list.pop());
console.log(list);