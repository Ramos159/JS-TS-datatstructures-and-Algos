export default class SingleListNode{
    public value: number| null
    public next: SingleListNode | null

    public constructor(value: number){
        this.value = value
        this.next = null
    }
}