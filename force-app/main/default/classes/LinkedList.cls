//Given a Linked List , return it in reverse
//1-2-3-4-5-null
//5-4-3-2-1-null
//null -> null
//single node -> node back
public with sharing class LinkedList {

   class Node{
       Integer value;
       Node next;

       public Node(integer data){
           this.value = data;
       }
   } 

   private Node head;

   //Add front element    
   public void addFront(integer data){
       //Create new Node
        Node newNode = new Node(data);

        if(head == null)
        {
            head = newNode;
            return;
        }

        //Set it's next pointer to current head, Make head second element

        newNode.next = head;

        //Set current node to be the new head

        head = newNode; 

   }


//Add in Last

public void addLast(Integer data){
    Node newNode = new Node(data);

    if(head == null){
        head = newNode;
        return;
    }

    //get from start
    Node current = head;

    while(current.next != null)
    {
        current = current.next;
    }

    current.next = newNode;
}

   public void traverseAndPrint(Node head){
       Node current = head;
       while(current.next != null){
           System.debug(current.value);
       }
   }
//Time complexity O(n)

//get current value
//store next value
//update next value to listSoFar
//store current node as listSoFar
//update current node to next 
   public void reverse(Node head){
       Node Prev = null;
       Node Current = head;

        while(Current.value != null){
            Node next = Current.next;
            Current.next = Prev;
            Prev = Current;
            Current = next;
        }
        return Prev;
   }

   
}
