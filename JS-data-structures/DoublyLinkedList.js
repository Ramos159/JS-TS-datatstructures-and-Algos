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

    getNodeAtIndex = (value) => {
        this._validateNumberParam(value)

        let node = this.head

        for(let i = 0;i < value;i++){
            node = node.next
        }

        return node
    }

    removeNodeAtIndex = (value) => {
        this._validateNumberParam(value)

        if(value == 0){
            this.removeHead()
        }
        else if(value == this.size-1){
            this.removeTail()
        }
        else{
            let node = this.head.next
            
            for(let i=1;i<index;i++){
                node = node.next
            }
            let prev = node.prev
            let next = node.next

            prev.next = next
            next.prev = prev
            this.size--

            node.prev = null
            node.next = null

            return node
        }
    }

    _validateNumberParam = (number) => {
        if(number < 0){
            throw new RangeError("Parameter can not be a negative number")
        }
        // value isn't a number
        if(typeof number !== "number"){
            throw new TypeError("Parameter must be a number")
        }
        // value wasnt passed
        if(number == null){
            throw new Error("Parameter can not be empty")
        }
        // value exceeds size
        if(number > this.size-1){
            throw new RangeError("value paramater exceeds list length")
        }
    }

    printList = (params) => {
        if(params){
            throw new Error("Function does not take parameters")
        }

        let node = this.head
    
        for(let i = 0;i<this.size;i++){
            console.log(`CURRENT NODE INDEX: ${i}`)
            console.log("CURRENT NODE VALUE",node.value)
            console.log("--------------------------------")
            node = node.next
        }
    }
}