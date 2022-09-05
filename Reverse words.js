function reverseWords(str) {
let arr = str.split(' ').map((el)=>{
  return el.split("").reverse().join("")
})
return arr.join(' ')
}
