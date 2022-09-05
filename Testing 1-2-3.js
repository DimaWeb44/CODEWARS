var number=function(array){
  if (array.length === 0 ){
    return []
  } else {
return array.map((el, index)=>{
  return `${index+1}: ${el}`
})}
}
