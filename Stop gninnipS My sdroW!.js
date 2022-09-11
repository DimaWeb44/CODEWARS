function spinWords(string){
let arr = string.split(' ')
let newArr = arr.map(el=>{
 return el.length >= 5 ? el.split('').reverse().join('') : el
})
return newArr.join(' ')
}
