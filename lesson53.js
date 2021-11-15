function abbrevName(name){
  let na = name.split(' ');
  let im = na[0].split('');
  let fo = na[1].split('');
  let fio = `${im[0].toUpperCase()}.${fo[0].toUpperCase()}`
      return fio;
 
 }