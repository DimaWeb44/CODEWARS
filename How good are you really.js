function betterThanAverage(classPoints, yourPoints) {
 let sr = (classPoints.reduce((a,b)=>a+b)) / (classPoints.length)
 return sr < yourPoints
}
