import DoubleListNode from './DoubleListNode'
import List from './ListInterface'

export default class DoublyLinkedList implements List{
    private head: DoubleListNode
    private tail: DoubleListNode
    private size: number

    public constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    public addToFrontOfTheList = (value: number): void => {
        const node = new DoubleListNode(value)

        this.head.prev = node
        node.next = this.head 
        this.head = node 
        this.size++
    }

    public addToBackOfTheList = (value: number ): void => {
        const node = new DoubleListNode(value)

        node.prev = this.tail
        this.tail = node 
        this.size++
    }

    public removeFirstNode = (): DoubleListNode => {
        const node = this.head 

        this.head = this.head.next
        this.head.prev = null
        this.size--

        return node
    }

    public removeLastNode = (): DoubleListNode => {
        const node = this.tail 

        this.tail = this.tail.prev
        this.tail.next = null
        this.size--

        return node
    }

    public getFirstNode = (): DoubleListNode => {
        return this.head
    }

    public getLastNode = (): DoubleListNode => {
        return this.tail
    }

    public getNodeAtIndex = (index: number): DoubleListNode => {

    }

    public removeNodeAtIndex = (index: number): DoubleListNode => {

    }

    //debug tool wont be tested
    public printList = (): void => {

    }

    public insertNodeAtIndex = (inex: number, value: number): void => {

    }

    public getSize = (): number => {
        return this.size
    }

}