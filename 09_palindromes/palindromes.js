const palindromes = function (string) {
    let low = 0, high = string.length-1;
    while(low < high)
        {
            if(string[low] !== string[high]) return false;
            low++;
            high--;
        }
        return true;
};

// Do not edit below this line
module.exports = palindromes;
