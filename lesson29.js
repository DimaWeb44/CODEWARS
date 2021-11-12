
function generateShape(integer){
  let amount = "";
          for (let i =0 ; i < integer; i++){
                 for (let j = 1; j <= integer; j++){
                 amount +=("+");
                }
          amount += "\n";
              }
  return amount.trim();
  }