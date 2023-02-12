
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.


function pickIt(arr){
    var odd=[],even=[];
    //for coding here
    for ( let i = 0; i < arr.length; i++){
      if(arr[i] % 2){
        odd.push(arr[i])
      }else{
         even.push(arr[i])
      }
    }
    
    return [odd,even];
  }