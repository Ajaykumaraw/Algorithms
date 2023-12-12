/* Here in this file we will understand the basic of Linked List liner data
    structure and will perform basic operations like 
    insertion deletion seaching and traversal.
*/
class LinkedList{
    constructor(head = null){
        this.head = head
    }
    appendlist(newnode){
        let node = this.head
        if(node == null){
            this.head = newnode
            return
        }
        while(node.next){
            node = node.next
        }
        node.next = newnode
    }
    print(){
        let node = this.head
        while(node){
            node = node.next
             console.log(node)
        }
        console.log(null)
    }

}

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


let linkedlist = new LinkedList()
let node = new Node(5)
linkedlist.appendlist(node)
linkedlist.appendlist(new Node(7))
linkedlist.appendlist(new Node(3))
linkedlist.appendlist(new Node(8))
// console.log(linkedlist)
linkedlist.print()
