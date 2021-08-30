function palindrome(str) {
    str = str.toLowerCase()
    let filtered = ''
    for (let l = 0; l < str.length; l++){
        if (isLetter(str[l])){
            filtered += str[l]
        }
    }
    //console.log(filtered)
    if (firstLast(filtered)){
        return true;
    } else return false;
    
}

function isLetter(char){
    if(char.toLowerCase() != char.toUpperCase()){
        return true
    } else if (Number(char)){
        return true
    }
}
function firstLast(str){
    //take a string and check if the first and last letters are equal
    //console.log(str.length)
    if(str.length == 1 || str.length == 0){
        return true
    }
    else if (str[0] != str[str.length - 1]){
        return false
    } else{
        //slice out the first and last letters
        return firstLast(str.slice(1, str.length - 1))
    }
}

console.log(palindrome("1 eye for of 1 eye."))