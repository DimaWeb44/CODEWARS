function sumMix(x){
let arr = x.map(t=>Number(t))
return arr.map(i=>x+=i, x=0).reverse()[0]
}
