
// Given an integer n, return true if it is a power of two. Otherwise, return false.



function isPowerOfTwo(n) {
    if (n <= 0) {
      return false; 
    }
    
    while (n % 2 === 0) {
      n /= 2; 
    }
    
    return n === 1; 
  }