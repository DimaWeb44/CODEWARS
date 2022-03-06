var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 15
  let dogYears = 15
  if (humanYears === 2) {
    catYears = 15 + 9
    dogYears = 15 + 9
  } else if (humanYears > 2) {
    catYears = (15 + 9)+(humanYears-2)*4
    dogYears = (15 + 9)+(humanYears-2)*5
  }
  
  return [humanYears,catYears,dogYears];
}
