function sumDigPow(a, b) {
  let ans = []
for (let i = a; i<=b; i++){
  let sum = 0
 let arr = String(i).split( "" ).map((num)=>{
return Number(num)
})
 for(let j = 0; j < arr.length; j++){ 
  sum += arr[j]**(j+1)
 }
 if (sum === i) { 
   ans.push(sum)
   }
}
return ans
} 
