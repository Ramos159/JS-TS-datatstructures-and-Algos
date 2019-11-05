export default class DoubleListNode {
    public value: any | null
    public next: DoubleListNode | null

    public constructor (value: any | null){
        this.value = value 
        this.next = null
    }
}