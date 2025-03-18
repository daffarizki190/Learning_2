function isPalindrome(str: string): boolean {

    const normalized: string = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const reversed: string = normalized.split('').reverse().join('');
    
    return normalized === reversed;
}

const testCases: string[] = ["madam", "racecar", "A man, a plan, a canal: Panama", "hello", "12321"];

testCases.forEach(test => {
    console.log(`"${test}" is ${isPalindrome(test) ? 'a palindrome' : 'not a palindrome'}`);
});

const example: string = "madam";
console.log(`"${example}" is ${isPalindrome(example) ? 'a palindrome' : 'not a palindrome'}`);

export default isPalindrome;