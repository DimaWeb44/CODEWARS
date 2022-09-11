function stray(numbers) {
  for (let i = 0; i < numbers.length; i++){
    if (numbers[0]-numbers[i] !== 0){
      return numbers[i]
    }
  }
}
