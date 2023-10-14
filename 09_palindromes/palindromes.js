const palindromes = function (string) {
    const characters = string.split('').reverse().join('');

    const stringNoSymbols = characters.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    const loweredString = stringNoSymbols.toLowerCase();
    const reversedString = loweredString.split('').reverse().join('');
    
    console.log("Processed:"+loweredString);
    
    console.log("Reversed :"+reversedString);
    if (loweredString == reversedString) {
        return true;
    } else {
        return false;
    }
};

// palindromes("djfijeos,ijfs! AWea ! esdlskme , . and . and + ");
// Do not edit below this line
module.exports = palindromes;
