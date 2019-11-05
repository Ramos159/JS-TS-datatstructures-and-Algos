import DoubleListNode from './DoublyListNode'
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

    public addToFrontOfTheList = (value: any): void => {

    }

    public addToBackOfTheList = (value: any): void => {

    }

    public removeFirstNode = (params: void): SingleListNode => {

    }

    public removeLastNode = (params: void): SingleListNode => {

    }

    public getFirstNode = (params: void): SingleListNode => {

    }

    public getLastNode = (params: void): SingleListNode => {

    }

    public getNodeAtIndex = (index: number): SingleListNode => {

    }

    public removeNodeAtIndex = (index: number): SingleListNode => {

    }

    public printList = (params: void): void => {

    }
    
}