"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
const moveZeros = (array) => {
    let nonZero = []; 
    let zero = []; 
    for (let x = 0; x < array.length; x++) { 
        if (array[x] === 0) {
            zero.push(array[x]); 
        }
        else {
            nonZero.push(array[x]); 
        }
    }
    array = nonZero.concat(zero); 
    console.log(array); 
};
exports.moveZeros = moveZeros;

(0, exports.moveZeros)([1, false, 0, 0, 4, 0, 0, 3, 2]);
