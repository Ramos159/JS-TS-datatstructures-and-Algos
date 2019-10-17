import SingleListNode from '../TS-data-structures/SingleListNode'

    describe('Single List Node',()=>{
        test('has a value property',()=>{
            let node: SingleListNode = new SingleListNode(1)
            expect(node).toMatchObject({value:1})
        })
        test('has a next property that is intialized to null',()=>{
            let node: SingleListNode = new SingleListNode(1)
            expect(node).toMatchObject({next:null})
        })
    })