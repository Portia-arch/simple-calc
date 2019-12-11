function addFunction(...args) {
    let sum = 0;

    for (i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}
console.log(addFunction(1, 2, 3, 4));

function multiply(...args) {
    let quantity = 1;

    for (i = 0; i < args.length; i++) {
        quantity = quantity * args[i];
    }
    return quantity;
}
console.log(multiply(1, 2, 3, 4));

    module.exports = { addFunction, multiply}
