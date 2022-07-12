const removeFirstAndLastCharacter = (input) => {
    // the process
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (i === 0 || i === input.length - 1) continue
        result += input[i];
    }
    return result; // the result
}

const reversedString = (input) => {
    // the process
    let result = '';
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    return result;// the result
}

console.log(removeFirstAndLastCharacter("malam")) 
console.log(reversedString("siang")) 