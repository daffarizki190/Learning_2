function removeFirstOccurrence(originalString, searchString) {
    const index = originalString.indexOf(searchString);
    
    if (index === -1) {
        return originalString;
    }
    
    return originalString.substring(0, index) + 
           originalString.substring(index + searchString.length);
}

const original = "Hello world";
const search = "ell";
const result = removeFirstOccurrence(original, search);

console.log(`Original string: "${original}"`);
console.log(`Search string: "${search}"`);
console.log(`Result: "${result}"`);

const example = "Hello world";
const exampleSearch = "ell";
console.log(`"${example}" after removing "${exampleSearch}": "${removeFirstOccurrence(example, exampleSearch)}"`);

module.exports = removeFirstOccurrence;