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
        this.tail = null;
        this.length = 0;
    }
    //Pushing the new Node in End
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
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
        this.tail = pre;
        this.length -= 1;
        if(this.length === 0){
            this.head = null;
            this.tail= null;
        }
        return current;
    }

    //Removing first node
    shift(){
        if(this.length === 0){
            return undefined;
        }
        var curHead = this.head;
        this.head = curHead.next;
        this.length--;
        if(this.length === 0){
            this.tail =null;
        }
        return curHead;
    }

    //Adding node at start

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    //get the value on certain index

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    //set the value
    set(index,val){
        var node = get(index);
        if(!node){
            return false;
        }
        else{
            node.val = val;
        }
    }
    
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) !!this.push(val); //converting the returned value to boolean
        if(index === 0) !!this.unshift(val);
        var newNode = new Node(val);
        var Prev = this.get(index-1);
        newNode.next = Prev.next;
        Prev.next = newNode;
        this.length++;
        return true;

    }

    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        var Prev = get(index - 1);
        var temp = Prev.next;
        Prev.next = Prev.next.next;
        this.length--;
        return temp;

    }

    //Print the Linked List
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current=current.next;
        }
        console.log(arr);
    }

    //Reversing the Linked List
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var Prev = null;
        var next;
        for(var i = 0 ;  i< this.length; i++){
            next = node.next;
            node.next = Prev;
            Prev = node;
            node = next;
        }
    }

}

var list = new SinglyLinkedList();
list.push(30);
list.push(45);
list.push(55);
list.push(65);
list.push(75);
list.push(85);
list.print();
list.reverse();
list.print();