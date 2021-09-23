function solve(year,month,day){
    let newDate = new Date(year, month, day)
    newDate.setDate(-1);
    console.log(newDate.getFullYear(), newDate.getMonth(), newDate.getDate())
}