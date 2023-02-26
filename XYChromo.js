// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

function chromosomeCheck(sperm) {
    if(sperm == "XY")
    {
      return "Congratulations! You're going to have a son.";
    }
    
    return "Congratulations! You're going to have a daughter.";
    }