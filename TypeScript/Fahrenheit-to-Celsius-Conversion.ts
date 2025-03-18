function fahrenheitToCelsius(fahrenheit: number): string {
    const celsius: number = (fahrenheit - 32) * 5 / 9;
    
    return celsius.toFixed(2);
}

const fahrenheit: number = 98.6;
const celsius: string = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${celsius}°C`);

export default fahrenheitToCelsius;