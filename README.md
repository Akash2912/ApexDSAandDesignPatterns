# Three things to know about arrays
can hold anything
fixed size
Random access

Complexity of Array is O(1), direct access to a particular index
Insertion is a linear operation

Big O Notation

The efficiency of your algorithm
Used to describe runtime characterstics of our data structures  and algorithms

O(n!) > O(2^n) > O(n^2) > O(n log n) > O(n) > O(log n),O(1)

O(1) - Same amount of time regardless of size: Random access of array
O(log n) - When doubling the number of elements doesn't mean double the time : Search Algorithms
O(n) - Adding elements increases the runtime linearly : looping an array
O(n log n) - Every element has to be compared with every other elements, lots of comparison. : Sorting Algorithms
O(n^2) - Increasing quadratically : Nested loops 
O(2^n) - Recursion - fibonacci series

Rule of thumb: Drop the non dominant terms and constants

O(n^2 +n) -> O(n^2)
O(3n) -> O(n)

Add Runtimes
O(n + m)

# *************************************************

for(integer n : arrayN){
  for(int m:arrayM){
    print(n+","+n)
  }
}

The complexity for above loop is O(n*m) not O(n^2)

#**** Stack and Queues ***************************

Stack : LIFO
Queue : FIFO

Has complexity of O(1)

Linked Lists are often used in Stack and queues

Stacks : Push --> head --> pop   LIFO

Queues : add --> tail --> head --> remove : FIFO

#*******************************************
Binary Tree: Ordered and Recursive
Full Binary Tree : has 0 or two childrens
Perfect Binary tree : have parents
O(log n) runtime complexity , because every time we find any node in binary tree its halfing itself at each iteration

#*********************************************

Binary Heaps::

Space efficient
less code

Examples: Routers
          Shortest Path alogorithms

#**********************************************

Fibonacci Series: O(2^n)


          



