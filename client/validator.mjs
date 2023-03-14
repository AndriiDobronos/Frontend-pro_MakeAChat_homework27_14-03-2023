"use strict";
const nameIsValid = function nameIsValid(name) {
    if (name.trim() && isNaN(+name) && name.length <= 20) {
        return true
    }else{
        return false
    }
}
export {nameIsValid};