public with sharing class binaryTree {

    class Node{
        Integer key;
        String value;
        Node left , right;

        public Node(Integer key, String Value)
        {
            this.key = key;
            this.value = value;
        }

        public Node min()
        {
            if(left == null){
                return this;
            }else{
                return left.min();
            }
        }
    }


    Node root;

    //find the minimum node
    public Node findMin(Node node){
        return node.min();
    }


    //find the key

    public String find(integer key){
        //first find the node
        Node node = find(root, key);

        //Then return the value

        return node == null ? null : node.value;
    }

    private Node find(Node node, intger key)
    {
        if(node == null || node.key == key){
            return node;
        }else if(key < node.key){
            return find(node.left, key);
        }else if(key > node.key){
            return find(node.right, key);
        }
        return null;
    }

    public void insertNode(Integer key, String value){
        root = insertItem(root, key, value);
    }

    private node insertItem(Node node, Integer key, String value){

        Node newNode = new Node(key, value);

        if(node == null)
        {
            node = newNode;
            return node;
        }

        if(key < node.key){
            node.left = insertItem(node.left, key, value);
        }else{
            node.right = insertItem(node.right, key, value);
        }

        return node;
    }

    public void deleteItem(Integer key){
        root = deleteNode(root, key);
    }

    public Node deleteNode(Node node, Integer key){
        if(node == null)
        {
            return null;
        }else if(key < node.key){
            node.left = deleteNode(node.left, key);
        }else if(key > node.key){
            node.right = deleteNode(node.right, key);
        }else{
            //key == node.key, find the exact node
            //if no child
            if(node.left == null && node.right == null){
                node = null;
            }

            //if one child
            else if(node.left == null){
                node = node.right;
            }else if(node.right == null){
                node = node.left;
            }

            //if two children
            else{
                //find the minimum node on the right
                Node minRight = findMin(node.right);

                //Copy the value of minimum node 
                node.key = minRight.key;
                node.value = minRight.value;

                //now we can remove the minimum node
                node.right = deleteNode(node.right, node.key);
            }

            return node;
        }
    }

    public void printPostOrderTraversal(){
        postOrderTraversal(root);
    }

    private void postOrderTravesral(Node node){
        if(node!=null)
        {
            postOrderTravesral(node.left);
            postOrderTravesral(node.right);
            system.debug(node.key);
        }
    }

    public void printPreOrderTraversal(){preOrderTraversal(root);}

    private void preOrderTraversal(Node node){
        if(node!=null){
            system.debug(node.key);
            preOrderTraversal(node.left);
            preOrderTraversal(node.right);
        }
    }
}
