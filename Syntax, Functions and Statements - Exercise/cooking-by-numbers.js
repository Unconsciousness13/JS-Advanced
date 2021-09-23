function solve(num, one, two, tree, four, five) {
    num = applyOperator(num, one);
    console.log(num);
    num = applyOperator(num, two);
    console.log(num);
    num = applyOperator(num, tree);
    console.log(num);
    num = applyOperator(num, four);
    console.log(num);
    num = applyOperator(num, five);
    console.log(num);
    function applyOperator(num, operator) {
        switch (operator) {
            case 'chop': { num /= 2; break; }
            case 'dice': { num = Math.sqrt(num); break; }
            case 'spice': { num += 1; break; }
            case 'bake': { num *= 3; break; }
            case 'fillet': { num *= 0.80; break; }

        }
    return num
    }
    
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
