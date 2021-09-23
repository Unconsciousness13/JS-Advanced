function solve(arr){
    let largest = -99999999;
       for(let i=0; i<arr.length; i++)
         for(let j=0; j<arr[i].length; j++)
           if(largest <= arr[i][j])
             largest = arr[i][j];
    
    
         return largest;
   }
   console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ))