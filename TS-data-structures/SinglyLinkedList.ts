import SingleListNode from "./SingleListNode";
import List from "./ListInterface"

export default class SinglyLinkedList implements List{
    public head: SingleListNode
    public tail: SingleListNode
    public size: number

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    addToFrontOfTheList = (value: any): void =>{
        const node = new SingleListNode(value);

        if(this.head){
            node.next = this.head 
            this.head = node
            this.size ++
        }
        else{
            this.head = node
            this.tail = node
            this.size++
        }
    }

    addToTheBackOfTheList = (value: any): void => {
        const node = new SingleListNode(value);

        if(this.tail){
            this.tail.next = node
            this.tail = node
            this.size ++
        }
        else{
            this.head = node 
            this.tail = node
            this.size ++
        }
    }

    removeFirstNode = (params: void): SingleListNode => {
        if(this.size === 0){
            throw new Error("Can not remove first node, list is currently empty")
        }
        else if(this.size === 1){
            const node = this.head

            this.head = null
            this.tail = null
            this.size--

            return node
        }
        else{
            const node = this.head 

            this.head = this.head.next
            node.next = null
            this.size--
    
            return node
        }
    }

    removeLastNode = (params: void): any => {
        if(this.size===0){
            throw new Error("Can not remove last node, list is currently empty")
        }
        else if(this.size === 1){
            const node = this.head

            this.head = null
            this.tail = null
            this.size--

            return node
        }
        else{
            let newTail = this.head
            let tail = this.head.next

            while(tail.next != null){
                tail = tail.next
                newTail = tail.next
            }
            newTail.next = null
            this.tail = newTail
            this.size--

            return tail
        }
    }
    // getNodeAtIndex(index: number): any;
    // removeNodeAtIndex(index: number): any;
    // printList(params: void): void;
}