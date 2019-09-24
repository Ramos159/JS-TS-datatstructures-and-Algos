import DoubleListNode from './DoubleListNode'

export default class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    addNodeToFront = (value) => {
        let node = new _DoubleListNode(value)

        if(this.head){
            this.head.prev = node
            node.next = this.head
            this.head = node
            this.size++
        }
        else{
            this.head = node
            this.tail = node
            this.size++
        }
    }

    addNodeToEnd = (value) => {
        let node = new _DoubleListNode(value)

        if(this.tail){
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
            this.size++
        }
        else{
            this.head = node
            this.tail = node
            this.size++
        }
    }

    removeHead = () => {
        let node = this.head 

        this.head = this.head.next
        this.head.prev = null
        this.size--

        node.next = null

        return node
    }

    removeTail = () => {
        let node = this.tail 

        this.tail = this.tail.prev
        this.tail.next = null
        this.size--

        node.prev = null

        return node
    }
}