import Stack from '../data-structures/stack&queue/stack'

// rather short test, since a stack doesnt do too much. if i can come up with other methods and tests i'll include them later

describe('Stack',()=>{
    describe('Initialization',()=>{
        test('Stack is intialized with an empty array',()=>{
            const stack: Stack = new Stack()
            expect(stack.size()).toEqual(0)
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
            expect(stack.includes(3)).toEqual(false)

            stack.pop()
            expect(stack.includes(2)).toEqual(false)
        })
        test('throw an error when it used on an empty stack',()=>{
            const stack: Stack = new Stack()

            expect(()=>{
                stack.pop()
            }).toThrow()
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
            expect(stack.includes(56)).toEqual(true)
        })
    })
    // describe('getCurrentStack()',()=>{
    //     test('returns a copy of the current stack',()=>{
    //         let stack: Stack = new Stack()

    //         stack.push(1)
    //         stack.push(2)
    //         stack.push(3)
    //         stack.push(4)
    //         stack.push(5)

    //         expect(stack.getCurrentStack()).toEqual([1,2,3,4,5])
    //     })
    // })
    describe('empty()',()=>{
        test('return a boolean to indicate if the stack is empty or not',()=>{
            let stack: Stack = new Stack()

            expect(stack.empty()).toEqual(true)
    
            stack.push(1)
    
            expect(stack.empty()).toEqual(false)
        })
    })
    describe('includes()',()=>{
        test('returns a boolean depending if a number is found within the stack or not',()=>{
            let stack: Stack = new Stack()

            stack.push(1)
            stack.push(3)
            stack.push(5)

            expect(stack.includes(5)).toEqual(true)
            expect(stack.includes(6)).toEqual(false)
        })
    })
    describe('size()',()=>{
        test('returns the size of the list accurately',()=>{
            let stack: Stack = new Stack()

            stack.push(2)

            expect(stack.size()).toEqual(1)

            stack.push(4)

            expect(stack.size()).toEqual(2)

            stack.pop()
            stack.pop()

            expect(stack.size()).toEqual(0)
        })
    })
})