function largestNumber(first,second,third){
    let result;
    if (first > second && first > third)
    {
        result = first;
    }
    else if(first < second && second > third)
    {
        result = second;
    }
    else if(first < third && second < third)
    {
        result = third;
    }
    console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16)