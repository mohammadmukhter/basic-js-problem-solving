function findSecondSmallestElement(arrayOfNumber){

    const sortedData = arrayOfNumber.sort((a, b) => a - b);
    const secondSmallElement = sortedData[1];

    return secondSmallElement;
}

const arr= [29,30, 12, 15,900, 500, 23, 18, 11,21,7,44, 9];
const secondSmallNumber = findSecondSmallestElement(arr);
console.log(secondSmallNumber);