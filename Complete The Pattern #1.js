function pattern(n){
 let output="";
  for (let i = 1; i<=n; i++){
    output+= `${i}`.repeat(i) + ((n > 1 & i !== n) ? '\n': '')
  }
 return output;
}
