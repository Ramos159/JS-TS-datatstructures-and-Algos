export default class DoubleListNode {
    public value: number | null
    public next: DoubleListNode | null
    public prev: DoubleListNode | null

    public constructor (value: number | null){
        this.value = value 
        this.next = null
    }
}