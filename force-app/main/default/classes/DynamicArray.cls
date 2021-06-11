public with sharing class DynamicArray{
   //Class for Linked List
   //Linked list has no random access
   //Creating a Linked List
   //Create a Node
   
   private static class Node{
       Node next;
       integer data;

       public Node(integer data){
           this.data = data;
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

//Get first

public Integer getFirst(){
    if(head != null){
        return head.data;
    }
    return null;
}

//Get Last

public Integer getLast(){
    if(head == null){
        throw new IllegalStateException('Empty List');
    }

    Node current = head;

    while(current.next != null){
        current = current.next;
    }

    return current.data;
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
//Brute force approach to get size
public Integer getSize()
{
    if(head == null)
    {
        return 0;
    }

    Node current = head;
    Integer size = 0;
    while(current.next != null)
    {
            size ++;
    }

    return size;

}
// clear the linked list


public void clear(){
//setting the head to null dereference the remaining linked list and its reference will set to garbage collector
    head = null;
}

//Delete Value
public void deleteValue(Integer value){

    if(head == null)
    {
        return;
    }

    if(head.data = value)
    {
        head = head.next;
        return;
    }

    Node current = head;

    while(current.next != null)
    {
        if(current.next.data == value)
        {
            current.next = current.next.next;
            return;
        }
    }


}


}
