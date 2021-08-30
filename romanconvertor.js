function convertToRoman(num) {
    if (!typeof num == 'number') {
        return num
    }
    else {
        let counter = 1
        let numArr = Array.from(String(num)) // numbers are in string
        let romanOutput = ''
        return recursNumber(numArr, romanOutput, counter)
    } 
}

function recursNumber(numArr, roman, counter){
    if (numArr.length < 1) return roman;
    let lastNumber = Number(numArr.pop())
    if (lastNumber != 0){
        roman = ROMAN[counter][lastNumber] + roman
    }
    counter += 1
    return recursNumber(numArr, roman, counter)
}

//store roman numeral conversion data in objects
const thousands = {
    1: 'M',
    2: 'MM',
    3: 'MMM',
}

const hundreds = {
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM'
}

const tens = {
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC'
}

const units = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
}

const ROMAN = {
    4: thousands,
    3: hundreds,
    2: tens,
    1: units,
}
 console.log(!typeof 36 == 'number')  
console.log(convertToRoman(3999));
