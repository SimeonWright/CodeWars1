// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.



function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++;
        break;
      } else {
        digits[i] = 0;
        if (i === 0) {
          digits.unshift(1);
        }
      }
    }
    return digits;
  }