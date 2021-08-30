let arr2d = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const CURRENCY = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01,
}

function reArr(arr){
    //reverses an array
    let nArr = []
    for (let i = arr.length -1; i > -1; i--){
        nArr.push(arr[i])
    }
    return nArr
}

//test const
const cashOwed = 50

//I need a function that checks that this enough change in the 2d array 
function checkChange(arr){
    if (arr[1] > 0){
        return true
    } else return false
}

//I also need a function to do the subtracting of the change from the 2d array 
function subtractChange(cid, changeArr, amount, owed){
    //cid => cash in drawer, changeArr => array with change
    //amount => amount to subtract by from cid
    //owed => amount owed
    cid[1] -= amount
    changeArr[1] += amount
    owed -= amount
    return owed
}

//function that checks if there is cash in the cid
function checkCid(cid){
    let len = cid.length, amount = 0, noCash = 0
    for (let i = 0; i < len; i++){
        if (cid[i][1] == 0){
            noCash += 1
        } else{
            amount += cid[i][1]
        }
    }
    if (noCash == len){
        return {cash: false, amount: amount}
    } else return {cash: true, amount: amount}
}

//function that check whether the given currency name exists in a 2dArray
function ifNameInChange(change, name){
    let index = undefined
    for (let i = 0; i < change.length; i++){
        if (change[i][0] == name){
            index = i 
            return index
        }
    }
}

//Writing a function that gets change from a 2d array recursively
//cid => 2d array, owed => cash owed, change => will be a 2dArray and is the output
function getChange(cid, index, change, owed){
    if (owed == 0){
        return change
    } else if (index == cid.length){
        // i.e not enough change
        return false//change
    }
    if (checkChange(cid[index]) && CURRENCY[cid[index][0]] <= owed){
        //if there is cash and the currency name is <= cash owed
        let changeIndex = ifNameInChange(change, cid[index][0])
        if (typeof changeIndex == 'number'){
            //I used round becoz the owed become weird when doing decimals, this fixed 0.01 from looking like 0.0099991
            owed = Math.round((subtractChange(cid[index], change[changeIndex], CURRENCY[cid[index][0]], owed) + Number.EPSILON) *100)/100
        } else if(typeof changeIndex == 'undefined') {
            let changeUnit = [cid[index][0], 0]
            owed = Math.round((subtractChange(cid[index], changeUnit, CURRENCY[cid[index][0]], owed) + Number.EPSILON) *100)/100
            change.push(changeUnit)
        }
        return getChange(cid, index, change, owed)
    }
    index += 1
    return getChange(cid, index, change, owed)
}

//let pr = console.log

function checkCashRegister(price, cash, cid) {
    let change;
    let owed = cash - price
    let cidInfo = checkCid(cid)
    if (!cidInfo.cash){
        return {status: 'INSUFFICIENT_FUNDS', change: []}
    } else if (cidInfo.amount == owed){
        return {status: 'CLOSED' , change: cid}
    }
    let revCid = reArr(cid)
    let index = 0
    change = getChange(revCid, index, [], owed)
    if (change == false){
        return {status: 'INSUFFICIENT_FUNDS', change: []}
    } else {
        return {status: 'OPEN',change: change}
    }
  }

  //pr(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

  
