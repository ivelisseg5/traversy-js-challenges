function findMaxNumber(arr) {
// have the max value be the first index of the array
    let max = arr[0];

// loop through the array and compare the two values, max and the index in which we're
// currently in, and if the current index is larger than the previous maximum value
// replace the max value with the current one (i explained this so badly)
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }

// return the max value
    return max;
}

module.exports = findMaxNumber;
