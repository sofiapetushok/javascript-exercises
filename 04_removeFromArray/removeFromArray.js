const removeFromArray = function(array, ...args) {
    const newArray = [];

    array.filter(element => {
        !args.includes(element);
    });
    console.log(newArray);
    return newArray;
};

// let array1 = [1,2,3,4,5,6,[1,2,"string"],7,8,9,10, [3,4,5,6,7, [3,4,5]]];
 
// removeFromArray(array1, 3);

// Do not edit below this line
module.exports = removeFromArray;
