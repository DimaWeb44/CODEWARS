const prevMultOfThree = n => {
  
  for (let i=String(n).length; i>0 ; i--){
    n = Number(String(n).substring(0,i));
    if(n % 3 === 0) {return n;}
  }
  
  return null;
}
