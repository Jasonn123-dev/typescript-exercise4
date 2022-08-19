export const moveZeros = (array: any[]) => { 
    
    let nonZero: any[] = []; 
    let zero: number[] = []; 

    for (let x = 0; x < array.length; x++) { 
        if (array[x] === 0) {
            zero.push(array[x]); 
        } else {
            nonZero.push(array[x]) 
        }
    }
    array = nonZero.concat(zero); 

    console.log(array); 
}

moveZeros([1, false, 0, 0, 4, 0, 0, 3, 2]); 