function doubleChar(str) {
  let dblStr = "";
  
  for (let i = 0; i < str.length; i++) {
  
    let char = str[i];
    
    dblStr += char + char;
  }
  return dblStr;
}
