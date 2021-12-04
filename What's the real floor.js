function getRealFloor(n) {
 if (n <= 1 && n > -1) return 0 
 if (n > 1 && n < 13) return n-1
 if (n > 13) return n-2
  else return n
}
