function telephoneCheck(str) {
    let pattern = /^[1]?[-\s\.]?[\(]?[0-9]{3}[\)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    let strArr = str.split('')
    if (strArr.includes('(')){
        if (strArr.includes(')')){
            return pattern.test(str)
        } else {
            return false
        }
    } else if (strArr.includes(')') && !strArr.includes('(')){
        return false
    } else if (!strArr.includes('(') && !strArr.includes(')')){
        return pattern.test(str)
    }
}

let s = '27576227382'
console.log(telephoneCheck(s))