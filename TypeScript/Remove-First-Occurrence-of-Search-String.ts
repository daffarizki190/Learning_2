function removeFirstOccurrence(originalString: string, searchString: string): string {
    const index: number = originalString.indexOf(searchString);
    
    if (index === -1) {
        return originalString;
    }
    
    return originalString.substring(0, index) + 
           originalString.substring(index + searchString.length);
}

const original: string = "Hello world";
const search: string = "ell";
const result: string = removeFirstOccurrence(original, search);

console.log(`Original string: "${original}"`);
console.log(`Search string: "${search}"`);
console.log(`Result: "${result}"`);

const example: string = "Hello world";
const exampleSearch: string = "ell";
console.log(`"${example}" after removing "${exampleSearch}": "${removeFirstOccurrence(example, exampleSearch)}"`);

export default removeFirstOccurrence;