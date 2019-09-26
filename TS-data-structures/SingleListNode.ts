export default class SingleListNode{
    public value:any
    public next:SingleListNode | null

    constructor(value:any){
        this.value = value
        this.next = null
    }
}