// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

const betterThanAverage = (classPoints, yourPoints) => 
   classPoints.reduce((prev, curr) => prev + curr) / classPoints.length < yourPoints
