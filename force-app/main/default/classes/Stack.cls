public with sharing class Stack {

    private class Node{
        integer data;
        private Node next;
        private Node(Integer data){
            this.data = data;
        }
    }

    private Node head;

    public boolean isEmpty(){
        return head == null;
    }

    public Integer peek()
    {
        return head.data;
    }

    public void push(Integer data){
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    public Integer pop(){
        if(head == null) throw new Exception('Stack is Empty');
        Integer data = head.data;
        head = head.next;
        return data;
    }
}
