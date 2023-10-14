const palindromes = function (string) {
    const characters = string.split('');

    const stringNoSymbols = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    const loweredString = stringNoSymbols.toLowerCase();
    const reversedString = loweredString.
};

palindromes("djfijeos,ijfs! AWea ! esdlskme , . and . and + ");
// Do not edit below this line
// module.exports = palindromes;
