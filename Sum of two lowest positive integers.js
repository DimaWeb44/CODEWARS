function sumTwoSmallestNumbers(numbers) {  
 let min1 = Math.min(...numbers)
 let i = numbers.indexOf(min1);
if(i >= 0) {
   numbers.splice(i,1);
}
  let min2 = Math.min(...numbers)
  return min1 + min2
}
