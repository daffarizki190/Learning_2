function isEven(n: number): boolean {
    return n % 2 === 0;
}

function isOdd(n: number): boolean {
    return !isEven(n);
}

const number1: number = 1000;
console.log(`${number1} is even: ${isEven(number1)}`);
console.log(`${number1} is odd: ${isOdd(number1)}`);

const number2: number = 1001;
console.log(`${number2} is even: ${isEven(number2)}`);
console.log(`${number2} is odd: ${isOdd(number2)}`);

export {
    isEven,
    isOdd
};