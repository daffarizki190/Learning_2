function convertLength(value, fromUnit, toUnit) {
    const toMeters = {
        'cm': 0.01,
        'm': 1,
        'km': 1000
    };
    
    const meters = value * toMeters[fromUnit];
    
    const result = meters / toMeters[toUnit];
    
    return result;
}

const centimeters = 100000;
const kilometers = convertLength(centimeters, 'cm', 'km');
console.log(`${centimeters} cm = ${kilometers} km`);

const km = 1;
const cm = convertLength(km, 'km', 'cm');
console.log(`${km} km = ${cm} cm`);

module.exports = convertLength;