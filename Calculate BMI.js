function bmi(weight, height) {
   var bmi = 0;
  bmi = weight / (height * height);
  if (bmi <= 18.5) {return "Underweight"}
  else if (bmi <= 25) {return "Normal"}
   else if (bmi <= 30) {return "Overweight"}
   else if (bmi > 30) {return "Obese"}
}
