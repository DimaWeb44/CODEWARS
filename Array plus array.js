function arrayPlusArray(arr1, arr2) {
     var s = 0;
   for (let i = 0; i < arr1.length; i++){
      s += arr1[i]
   }
    var d = 0;
   for (let i = 0; i < arr2.length; i++){
      s += arr2[i]
   }
    return s+d;
}
