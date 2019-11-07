import Stack from '../data-structures/stack&queue/stack'

// rather short test, since a stack doesnt do too much. if i can come up with other methods and tests i'll include them later

describe('Stack',()=>{
    describe('Initialization',()=>{
        test('Stack is intialized with an empty array',()=>{
            const stack: Stack = new Stack()
            expect(stack.getCurrentStack().length).toEqual(0)
        })
    })
    describe('Pop()',()=>{
        test('returns the last element inserted',()=>{
            const stack: Stack = new Stack()

            stack.push(1)
            let num: number = stack.pop()

            expect(num).toEqual(1)

            stack.push(2)
            stack.push(3)

            num = stack.pop()

            expect(num).toEqual(3)
        })
        test('removes the element popped from the list',()=>{
            const stack: Stack = new Stack()

            stack.push(1)
            stack.push(2)
            stack.push(3)

            stack.pop()

            // wanted to use includes, but doesnt work for some reason. 
            expect(stack.getCurrentStack().indexOf(3)).toEqual(-1)

            stack.pop()
            expect(stack.getCurrentStack().indexOf(2)).toEqual(-1)
        })
    })
    describe('push()',()=>{
        test('inserts value to the last position',()=>{
            const stack: Stack = new Stack()

            stack.push(1)
            stack.push(2)
            expect(stack.pop()).toEqual(2)

            stack.push(2)
            stack.push(3)
            stack.push(4)

            expect(stack.pop()).toEqual(4)
        })
    })
    describe('peek()',()=>{
        test('returns the last number',()=>{
            let stack: Stack = new Stack()

            stack.push(1)
            stack.push(2)
            stack.push(3)
            stack.push(4)

            expect(stack.peek()).toEqual(4)

            stack.push(5)

            expect(stack.peek()).toEqual(5)
        })
        test('does not remove peeked element from the list',()=>{
            let stack: Stack = new Stack()

            stack.push(2)
            stack.push(4)
            stack.push(56)

            expect(stack.peek()).toBe(56)
            expect(stack.getCurrentStack().indexOf(56)).toEqual(2)
        })
    })
    describe('getCurrentStack()',()=>{
        test('returns a copy of the current stack',()=>{
            let stack: Stack = new Stack()

            stack.push(1)
            stack.push(2)
            stack.push(3)
            stack.push(4)
            stack.push(5)

            expect(stack.getCurrentStack()).toEqual([1,2,3,4,5])
        })
    })
})