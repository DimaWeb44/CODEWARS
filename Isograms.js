function isIsogram(str){
  let an = 0
 let arr = str.toLowerCase().split('')
    arr.forEach((el)=>{
    for (let i=0; i<arr.length; i++){
      if (el === arr[i] ){
       ++an
      }
    }
  })
  return an===arr.length
}
