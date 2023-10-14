const sumAll = function (min, max) {

    if (min > max) {
        [min,max] = [max,min];   
    }

    let sum = 0;
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    for (let i = min; i <= max; i++) {
        if (i < 0 || Array.isArray(i)) {
            return 'ERROR';
        }
        sum += i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
