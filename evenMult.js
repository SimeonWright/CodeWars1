
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

var smallestEvenMultiple = function(n) {
    let output = 0
 
    if(n % 2 == 0){
        output = n;
    }
    else{
        output = n*2;
 
    }
    return output
 };
 