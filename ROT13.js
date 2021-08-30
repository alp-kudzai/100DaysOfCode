function rot13(str) {
    let wordArr = str.split(' ')
    let decrArr = []
    for (let word of wordArr){
        //create array of letters
        let letterArr = Array.from(word)
        let decrWord = ''
        for (let char of letterArr){
            //dealing with individual charactors now
            if (isLetter(char)){
                decrWord += decrypt(char)
            } else{
                decrWord += char
            }
        }
        decrArr.push(decrWord)
    }
    return decrArr.join(' ');
}

function isLetter(char){
    if(char.toLowerCase() != char.toUpperCase()){
        return true
    }
}

function decrypt(letter){
    let decrLetter;
    if (A_M.includes(letter)){
        decrLetter = N_Z[A_M.indexOf(letter)]
    } else{
        decrLetter = A_M[N_Z.indexOf(letter)]
    }
    return decrLetter
}

const A_M = Array.from('abcdefghijklm'.toUpperCase());
const N_Z = Array.from('nopqrstuvwxyz'.toUpperCase());

// let t = 'SERR PBQR PNZC'.split(' ')
// let al = []
// for (let w of t){
//     let Aw = Array.from(w)
//     let wc = ''
//     for (let i of Aw){
//         wc += i
//     }
//     al.push(wc)
// }
//console.log(al)
//console.log(rot13("SERR PBQR PNZC"));

let pat = /^[1]?[-\s\.]?[\((?=\[0-9\]{3}\))]?[0-9]{3}[(?<=\(\[0-9\]{3})\)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
console.log(pat.test('1 555-555-5555'))