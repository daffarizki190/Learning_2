function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return !isEven(n);
}

const number1 = 1000;
console.log(`${number1} is even: ${isEven(number1)}`);
console.log(`${number1} is odd: ${isOdd(number1)}`);

const number2 = 1001;
console.log(`${number2} is even: ${isEven(number2)}`);
console.log(`${number2} is odd: ${isOdd(number2)}`);

module.exports = {
    isEven,
    isOdd
};