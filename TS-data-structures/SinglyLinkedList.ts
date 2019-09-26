import SingleListNode from "./SingleListNode";
import List from "./ListInterface"

export default class SinglyLinkedList implements List{
    private head: SingleListNode | null
    private tail: SingleListNode | null
    private size: number

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

    removeLastNode = (params: void): SingleListNode => {
        if(this.size === 0){
            throw new Error("Can not remove last node, list is currently empty")
        }
        else if(this.size === 1){
            const node: SingleListNode = this.head

            this.head = null
            this.tail = null
            this.size --

            return node
        }
        else{
            let oldTail = this.head.next
            let newTail = this.head

            while(oldTail.next != null){
                newTail = oldTail
                oldTail = oldTail.next
            }

            this.tail = newTail
            newTail.next = null
            this.size --

            return oldTail
        }
    }

    getFirstNode = (params:void): SingleListNode => {
        return this.head
    }

    getLastNode = (params: void): SingleListNode => {
        return this.tail
    }

    getNodeAtIndex = (index: number): SingleListNode => {
        
    }
    removeNodeAtIndex = (index: number): SingleListNode =>{
        if(index < 0){
            throw new RangeError("Index parameter can not be negative")
        }
    }
    // printList(params: void): void;
}