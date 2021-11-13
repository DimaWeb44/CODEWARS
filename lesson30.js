function isVeryEvenNumber(n) {
  const numbers = String(n).split('').map(Number)
  const totalSum = numbers.reduce((acc, number) => acc + number, 0)
  while (String(totalSum).length > 1) return isVeryEvenNumber(totalSum)
  return totalSum % 2 === 0
}