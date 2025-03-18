type UnitOfLength = 'cm' | 'm' | 'km';
function convertLength(
    value: number, 
    fromUnit: UnitOfLength, 
    toUnit: UnitOfLength
): number {
    const toMeters: Record<UnitOfLength, number> = {
        'cm': 0.01,
        'm': 1,
        'km': 1000
    };
    
    const meters: number = value * toMeters[fromUnit];
    
    const result: number = meters / toMeters[toUnit];
    
    return result;
}

const centimeters: number = 100000;
const kilometers: number = convertLength(centimeters, 'cm', 'km');
console.log(`${centimeters} cm = ${kilometers} km`);

const km: number = 1;
const cm: number = convertLength(km, 'km', 'cm');
console.log(`${km} km = ${cm} cm`);

export default convertLength;