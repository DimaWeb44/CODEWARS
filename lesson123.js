function compareVersions (version1, version2) {
let arr1 = version1.split('.')
let arr2 = version2.split('.')
let int = arr1.length > arr2.length ? arr1.length : arr2.length

for (let i = 0; i < int; i++){
   arr1[i] === undefined ? arr1.push('0') : null
   arr2[i] === undefined ? arr2.push('0') : null
 }

  return +arr1.join('') >= +arr2.join('')
}
