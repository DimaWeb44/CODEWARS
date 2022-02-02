const cannonsReady = (gunners) => {
 let arr =  Object.values(gunners)
 return arr.some(el => el ==='nay')? 'Shiver me timbers!': 'Fire!'
}
