function basicOp(operation, value1, value2)
{ let kal
  switch (operation) {
    case '+':
      kal = value1 + value2;
      break;
     case "-":
      kal = value1 - value2;
      break;
       case '*':
      kal = value1 * value2;
      break;
       case '/':
      kal = value1 / value2;
      break;
    }
  return kal;
}