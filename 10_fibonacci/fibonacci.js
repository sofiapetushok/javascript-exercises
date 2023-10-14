const fibonacci = function(index) {
    const sequence = [0,1];
    const fiboSequence = [0,1];
    const maxIndex = 100;
    const indexVal = parseFloat(index); 
    if (Id > 0) {
        for (i = 2; i < maxIndex; i++) {
            const prev = sequence[i - 2];
            const next = sequence[i - 1]; 
            const sumNum = prev + next;
            fiboSequence.push(sumNum);        
            sequence.push(sumNum);
        };
        // console.log(fibo);
        // console.log(sequence[Id]);
        return sequence[indexVal];
    } else {
        return "OOPS";
    }
};

//  fibonacci("4");
// Do not edit below this line
module.exports = fibonacci;
