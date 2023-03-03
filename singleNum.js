// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

ar singleNumber = function(nums) {
    let obj = {}
   for ( let i of nums) {
       if(!obj[i]){
           obj[i] = 1
       } else {
           obj[i]++
       }
   }

   for (let i in obj){
       if (obj[i] == 1){
           return i
       }
   }
        
};