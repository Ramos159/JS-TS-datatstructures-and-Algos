export default class SingleListNode{
    public value: any | null
    public next: SingleListNode | null

    public constructor(value:any){
        this.value = value
        this.next = null
    }
}