export default class Stack {

    private body: Array<number>

    public constructor (){
        this.body = []
    }

    public pop = (): number => {
        if(this.body.length !== 0){
            return this.body.pop()
        }
        else{
            throw new Error('Stack is Empty, can not pop()')
        }
    }

    public push = (value: number) => {
        this.body.push(value)
    }

    public peek = (): number | null => {
       if(this.body.length > 0){
            return this.body[this.body.length-1]
       }
       else{
            return null
       }
    }

    public getCurrentStack = (): Array<number> => {
        return this.body
    }
}