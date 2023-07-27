function mostFrequentNumber(arr){
    let numberCountObj = {};
    let mostFrequent;
    let highestData= 0;

    arr.forEach(x=> {
        numberCountObj[x]= (numberCountObj[x] || 0)+1;
    });

    for(let objKey in numberCountObj){
        if(numberCountObj[objKey] > highestData){
            mostFrequent = objKey;
            highestData= numberCountObj[objKey];
        }
    }
    return mostFrequent;
}

const arrayOfNumber = [1,2,3,4,55,53,88, 4,22,55,56,44,55];
const mostFrequentData = mostFrequentNumber(arrayOfNumber);

console.log(mostFrequentData);