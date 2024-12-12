function countOccurrences(str, char) {
    // initialize the count variable
    let count = 0;
    
    // i is the index, so we're looping through the string to get the index of each character in the string
    // and increment the count variable to count how many times that specific character appeared.
    for (let i = 0; i < str.length; i++){    
        if(str[i] === char){
            count++;
        }
    }

    // return the count variable
    return count;
}

module.exports = countOccurrences;
