// // Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

var isPalindrome = function(x) {
    const str = x.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
  
};