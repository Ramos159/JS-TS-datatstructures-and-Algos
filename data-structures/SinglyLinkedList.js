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

    removeHead = () =>{
        let node = this.head
        node.next = null

        this.head = this.head.next
        this.size --

        return node
    }
    //ill zero index this for now
    getNodeAtIndex(value){
        if(value == 0){
            return this.head
        }

        if(value > this.size-1){
            throw new RangeError("Error: value paramater exceeds list length")
        }
        else{
            let node = this.head.next

            for(let i = 1;i == value;i++){
                node = node.next
            }
            return node
        }
    }
    //debug tool
    printList(){
        let node = this.head

        for(let i = 0;i<this.size;i++){
            console.log(`CURRENT NODE PLACE: ${i}`)
            console.log("CURRENT NODE VALUE",node.value)
            console.log("--------------------------------")
        }
    }
}