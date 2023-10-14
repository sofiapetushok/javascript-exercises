const fibonacci = function(index) {
    const sequence = [0,1];
    const fibo = [0,1];
    const Id = parseFloat(index); 
    if (Id > 0) {
        for (i = 2; i < 100; i++) {
            const prev = sequence[i - 2];
            const next = sequence[i - 1]; 
            const sumNum = prev + next;
            fibo.push(sumNum);        
            sequence.push(sumNum);
        };
        // console.log(fibo);
        // console.log(sequence[Id]);
        return sequence[Id];
    } else {
        return "OOPS";
    }
};

//  fibonacci("4");
// Do not edit below this line
module.exports = fibonacci;
