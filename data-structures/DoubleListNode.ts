import NodeInterface from "./NodeInterface"

export default class DoubleListNode implements NodeInterface{
    public value: number | null
    public next: DoubleListNode | null
    public prev: DoubleListNode | null

    public constructor (value: number | null){
        this.value = value 
        this.next = null
        this.prev = null
    }
}