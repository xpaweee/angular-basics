class LetConstVar {

    printNumber() {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        //wypisze 3
        console.log(i);
    }
    printNumber2() {
        let k = 99;
        for (let k = 0; k < 3; k++) {
            console.log(k);
        }
        
        //wypisze 99
        console.log(k);
    }

    showConst()
    {
        //stała wartość dla tej zminnej
        const num = 100;
        console.log(num);
        //brak mozliwosci przypisania
        //num = 50;
    
    }
}


let exmaple = new LetConstVar();
exmaple.printNumber();
exmaple.printNumber2();