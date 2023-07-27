function sumDataUsingTargetElement(arr, targetValue){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === targetValue) {
            return [i, j];
          }
        }
    }
    return [];
}

const targetArr = [1,2,4,6,7,10];
const targetValue= 10;
const sumData = sumDataUsingTargetElement(targetArr, targetValue);
console.log(sumData);