function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    
    return celsius.toFixed(2);
}

const fahrenheit = 98.6;
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${celsius}°C`);

module.exports = fahrenheitToCelsius;