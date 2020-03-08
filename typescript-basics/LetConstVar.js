var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        //wypisze 3
        console.log(i);
    };
    LetConstVar.prototype.printNumber2 = function () {
        var k = 99;
        for (var k_1 = 0; k_1 < 3; k_1++) {
            console.log(k_1);
        }
        console.log(k);
    };
    return LetConstVar;
}());
var exmaple = new LetConstVar();
exmaple.printNumber();
exmaple.printNumber2();
