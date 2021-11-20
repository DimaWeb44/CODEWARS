function past(h, m, s){
  if (0 <= h <= 23 &&
      0 <= m <= 59 &&
      0 <= s <= 59) {
     let result = (h * 3600000) + (m * 60000) + (s * 1000);
     return result;
  }
}
