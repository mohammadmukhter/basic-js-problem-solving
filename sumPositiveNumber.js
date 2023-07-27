function sumPositiveNumber(arr){ 

    let positiveNumberArray = [];
    for(let x of arr){ x >= 0 ? positiveNumberArray.push(x): 0; } 

    const summation = positiveNumberArray.reduce((sum, x)=>{ 
        return sum += x; 
    }, 0);   
    return summation; 
} 

const arrayOfNumbers = [4, 6, -19, 30, -4, -7, 5]; 

const sumData = sumPositiveNumber(arrayOfNumbers); 

console.log(sumData);