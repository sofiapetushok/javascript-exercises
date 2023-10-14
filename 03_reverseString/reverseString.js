const reverseString = function(str) {
  // 1st way
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    // return reversed;


    // 2nd way
    // let reversed = '';
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;
    
    // 3d way 
    let reversed = str.split('').reverse().join('');
    
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
