function chain(input, fs) {
const f1 = fs[0](input)
 const f2 = fs[1](f1)    
 return f2
}
