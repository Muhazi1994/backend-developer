function nonPalindrome(string){
    let result = "";
    // console.log(`nonPalindrome = ${nonPalindrome.join("_")}`);
    for(let i=0; i < string.length; i++){
        if(i === 0 || i === string.length -1) continue
        result += string[i];
        } 
        return result
    }
console.log(nonPalindrome("Wow mereka janji bertemu di makam"));