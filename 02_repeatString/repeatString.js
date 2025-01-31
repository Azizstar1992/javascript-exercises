const repeatString = function(word, amount) {
    let solution ="";
    while(amount-- >0)
        {
            solution+=word;
        }
    return solution;

};

// Do not edit below this line
module.exports = repeatString;
