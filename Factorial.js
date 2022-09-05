function factorial(n){
  let f = 1
 if (n===0 || n===1){
   return 1
 } else {
   for (let i=1; i<=n; i++){
     f*=i
   }
   return f
 }
}
