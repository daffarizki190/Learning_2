function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const reversed = normalized.split('').reverse().join('');
    
    return normalized === reversed;
}

const testCases = ["madam", "racecar", "A man, a plan, a canal: Panama", "hello", "12321"];

testCases.forEach(test => {
    console.log(`"${test}" is ${isPalindrome(test) ? 'a palindrome' : 'not a palindrome'}`);
});

const example = "madam";
console.log(`"${example}" is ${isPalindrome(example) ? 'a palindrome' : 'not a palindrome'}`);

module.exports = isPalindrome;