function stringReverse(string){
    let reverseString = "";

    for(let i= string.length-1; i>=0; i-- ){
        reverseString += string[i];
    }
    return reverseString;
}

const reversedString = stringReverse('hello my name is Mukhter');
console.log(reversedString);