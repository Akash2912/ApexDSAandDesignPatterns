public with sharing class binaryHeap {
   
   private Integer capacity = 10;
   private Integer size = 0;

    public List<Integer> items = new List<Integer>(capacity);

    private Integer leftChildIndex(Integer parentIndex) {return 2 * parentIndex +1;}
    private Integer rightChildIndex(Integer parentIndex) {return 2 * parentIndex + 2;}
    private Integer parentIndex(Integer childIndex){return (childIndex -1)/2 ;}

    private boolean hasLeftChild(Integer index){return leftChildIndex(index) < size;}
    private boolean hasRightChild(Integer index){return rightChildIndex(index) < size;}
    private boolean hasParent(Integer index){return parentIndex(index) >= 0;}

    private Integer leftChild(Integer index){return items[leftChildIndex(index)];}
    private Integer rightChild(Integer index){return items[rightChildIndex(index)];}
    private Integer parent(Integer index){return items[parentIndex(index)];}

    public void insertItem(Integer item){
        items[size] = item;
        size++;
        heapifyUp();
    }

    public void heapifyUp(){
        Integer index = size - 1; //taking last index of the array

        while(hasParent(index) && parent(index) < items[index])
        {
            swap(parentIndex(index), index); // swap the values to take maximum at top
            index = parentIndex(index); // go upwards towards top node
        }
    }

    public void swap(Integer indexOne,Integer indexTwo){
        Integer Temp = items[indexOne];
        Items[indexTwo] = items[indexOne];
        items[indexOne] = Temp;
    }

}
