const sumAll = function(first, second) {
    let amount = 0;
    while(first <= second)
        {
            amount+= first;
            first++;
        }
        return amount;
};

// Do not edit below this line
module.exports = sumAll;
