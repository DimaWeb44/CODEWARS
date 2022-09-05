function htmlspecialchars(formData) {
 const arr = formData.split('').map((el)=>{
    switch(el) {
  case '<': 
   return '&lt;'
  case '>': 
   return '&gt;'
  case '"': 
    return '&quot;'
  case '&': 
    return '&amp;'
  default:
    return el
}
})
  return arr.join('')
 }
