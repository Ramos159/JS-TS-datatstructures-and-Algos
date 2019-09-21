import _SingleListNode from "./SingleListNode"

export default class SinglyLinkedList{
    // maybe i should add a tail?
    // should linkedlists be zero index as well? 
    constructor(){
        this.head = null
        this.size = 0
    }

    addNode = (value) =>{
        const node = new _SingleListNode(value)

        if(this.head){
            let currentNode = this.head

            while(currentNode.next != null){
                currentNode = currentNode.next
            }
            currentNode.next = node
            this.size ++
        }
        else{
            this.head = node
            this.tail = node
            this.size ++
        }
    }

    removeHead = (params) =>{

        if(params){
            throw new Error("Function does not take parameters")
        }

        let node = this.head

        this.head = this.head.next
        this.size -- 

        node.next = null
        return node
    }
    //ill zero index this for now
    getNodeAtIndex(value){

    /// VALIDATIONS/////////////////////////////////////////////////
        if(value > 0){
            throw new RangeError("Parameter can not be negative")
        }
        // value isn't a number
        if(typeof value !== "number"){
            throw new TypeError("Parameter must be a number")
        }
        // value wasnt passed
        if(value == null){
            throw new Error("Parameter can not be empty")
        }
        if(value == 0){
            return this.head
        }
        // value exceeds size
        if(value > this.size-1){
            throw new RangeError("value paramater exceeds list length")
        }
    ////////////////////////////////////////////////////////////////

        let node = this.head.next

        for(let i = 1;i == value;i++){
            node = node.next
        }
        return node
    }
    //debug tool
    printList(params){

        if(params){
            throw new Error("Function does not take parameters")
        }

        let node = this.head

        for(let i = 0;i<this.size;i++){
            console.log(`CURRENT NODE PLACE: ${i}`)
            console.log("CURRENT NODE VALUE",node.value)
            console.log("--------------------------------")
        }
    }
}