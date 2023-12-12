
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(data){
        this.data = data;
    }

    //append linkedlist 
    appendList(newNode){
        let node = this.head;
        if(node == null){
            this.head = newNode;
            return;
        }
        while(node.next){
            node = node.next;
            console.log(node)
        }
        node.next = newNode;
    }
    // print list
    printList(){
       if(!node){
        console.log('empty Linkedlist');
       }
       while(node.next !=null){
        node = node.next
        //console.log(node);
       }
    }

    insertAt(index,newNode){
        //check if LinkedList is empty
        let node = this.head;
        if(node == null){
            this.head = newNode;
        }
        while(--index){
            console.log(node)
          if(node.next!== null){
            node = node.next;
          }else{
            throw Error('Index out of bound');
          }
        }
        let tempVal = node.next;
        node.next = newNode;
        newNode.next = tempVal;
    }
}

let mylist = new LinkedList();
let node = new Node(5);

mylist.appendList(node);
mylist.appendList(new Node(5));
mylist.appendList(new Node(9));
mylist.appendList(new Node(8));
mylist.printList();


