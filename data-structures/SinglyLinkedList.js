import _SingleListNode from "./SingleListNode"

export default class SinglyLinkedList{
    // code direction questions:
    // should remove methods return the nodes they remove?
    // should linkedlists be zero index? 
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    addNodeToEnd = (value) =>{
        const node = new _SingleListNode(value)
        this.tail.next = node
        this.tail = node
        this.size++
    }

    addNodeToFront = (value) => {
        const node = new _SingleListNode(value)
        node.next = this.head
        this.head = node
        this.size++
    }

    removeHead = (params) => {
        if(params){
            throw new Error("Function does not take parameters")
        }

        let node = this.head

        this.head = this.head.next
        this.size-- 
        node.next = null

        return node
    }

    removeTail(){
        if(params){
            throw new Error("Function does not take parameters")
        }

        let newTail = this.head
        let shouldBeTail = this.head.next

        while(shouldBeTail.next != null){
            newTail = newTail.next
            shouldBeTail = newTail.next
        }

        newTail.next = null
        this.tail = newTail
        this.size--

        return shouldBeTail
    }
    // ill zero index this for now
    getNodeAtIndex = (value) => {
        this._validateNumberParam(value)

        let node = this.head

        for(let i = 0;i < value;i++){
            node = node.next
        }

        return node
    }
    // private method used to validate number params
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
    // debug tool
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

    removeNodeAtIndex = (index) => {
        this._validateNumberParam(index)
        
        if(index == 0){
            this.removeHead()
        }
        else if(index == this.size-1){
            this.removeTail()
        }
        else{
            // previousNode always first item in list 
            // NextNode always be the third item in the list here 
            // 0 (past) -> 1 -> 2 (future)
            let previousNode = this.head
            let currentNode = this.head.next
            let nextNode = this.head.next.next

            for(let i = 1;i<index;i++){
                 previousNode = previousNode.next
                 currentNode =  currentNode.next
                 nextNode = nextNode.next
            }

            previousNode.next = nextNode
            currentNode.next = null
            this.size --

            return currentNode
        }
    }
}