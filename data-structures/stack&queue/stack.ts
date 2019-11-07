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
        return this.body.length === 0 ? null : this.body[this.body.length-1]
    }

    public empty = (): boolean => {
        return this.body.length === 0 ? true : false
    }

    public includes = (value: number): boolean => {
        let answer: boolean = false

        this.body.forEach(number=>{
            if(number === value){
                answer = true
            }
        })

        return answer
    }

    public size = (): number => {
        return this.body.length
    }
}