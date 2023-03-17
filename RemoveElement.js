"use strict";
//Реалізуйте функцію removeElement(array, item),
// щоб видалити елемент item з масиву array.
// Результат: [1, 2, 3, 4, 6, 7]

const arras = [1, 2, 3, 4, 5, 6, 7, 5];
const element = 5

function removeElement(array, item) {
    if (!Array.isArray(array)) {
        throw new Error('arras is not array')
    }
    if (typeof(item) !== 'number' && typeof(item) !== 'string') {
        throw new Error('Item is not a number or a string')
    }
    else {
        array.forEach((el) => {
            const indexEl = array.indexOf(el)
            if (el === item && indexEl !== -1) {
                array.splice(indexEl,1)
            }
        })
    }
}
module.exports =  {removeElement,arras,element}