function pyramide(numb) {
    symb = '* ';
    if (numb === undefined) {
        for (let i = 1; i <= 5; i++) {
            console.log(symb.repeat(5))
        }
    }
    for (let i = 1; i <= numb; i++) {
        console.log(symb.repeat(numb))
    }
}

pyramide()