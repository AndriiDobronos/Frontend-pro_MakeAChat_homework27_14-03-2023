const {removeElement,arras,element} = require('./RemoveElement.js');

describe('Check removeElement', () => {

    test('If the first parameter is not an array calling a function throws an error',() => {
        expect(() => removeElement(5,5)).toThrow()
    })
    test('An existing element is removed from the array',() => {
        expect(removeElement([1,2,3,4,5,6,7,5],5)).toBeUndefined()
    })
    test('Deletion of a non-existent element did not take place',() => {
        expect(removeElement([1,2,3,4,5,6,7,5],9)).toBeUndefined()
    })
    test('If there are several elements for deletion in the array, should delete all specified items',() => {
        expect(removeElement(arras,element));
        expect(arras.includes(element)).toBeFalsy()
    })
    test('If the item is not an number or string calling a function throws an error',() => {
        expect(() => removeElement([1,2,3,4,5,6,7,5], trim())).toThrow()
    })
})