function countPositivesSumNegatives(input) {
if (input == null || input.length < 1){
  return [];
}
var sum =0;
var pos =[];

for (var i=0; i<input.length; i++){

if(input[i]>0){
pos.push(input[i]);

} else{
sum += input[i];

}
}
    return [pos.length, sum];
}
