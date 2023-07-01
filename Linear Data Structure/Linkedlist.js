/* Here in this file we will understand the basic of Linked List liner data
    structure and will perform basic operations like 
    insertion deletion seaching and traversal.
*/
class LinkedList{
    constructor(head){
        this.head = null
    }

    print(){
        let node = this.head
        if(!node) console.log("empty list")
        while(node.next){
            node = node.next
            console.log(node.data)
        }
    }

    appendList(newnode){
        let node = this.head
        if(node ==null) {
            console.log("node null")
            this.head = newnode
            return
        }
        while(node.next){
            node = node.next
        }
        node.next = newnode
    }
}

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


let linkedlist = new LinkedList();
let node = new Node(5);
linkedlist.appendList(node)
linkedlist.print();
