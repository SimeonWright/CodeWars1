// Complete the function which returns the weekday according to the input number:
// i was using an if statemnt. i never heard of a case before i had the corrct concept using the if statement

function whatday(num) { 
    switch(num) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return 'Wrong, please enter a number between 1 and 7';
    }
}