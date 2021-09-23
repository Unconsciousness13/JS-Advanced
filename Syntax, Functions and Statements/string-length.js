function stringLength(first,second,third){
    let sumLength = 0;
    let averageLength = 0;
    sumLength = (first.length + second.length + third.length);
    averageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')