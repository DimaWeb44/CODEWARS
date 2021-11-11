
function periodIsLate(last, today, cycleLength)
{
  let month = today.getMonth()- last.getMonth();
  if(month){
    month = month * new Date(today.getYear(), today.getMonth(), 0).getDate()
  }
  return today.getDate() - last.getDate() + month > cycleLength ? true : false ;
}