function highAndLow(numbers){
  let li = numbers.split(' ')
  let max = Math.max.apply(null, li)
  let min = Math.min.apply(null, li)
  return max +' '+ min
}
