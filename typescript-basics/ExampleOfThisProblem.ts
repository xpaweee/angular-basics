class ExampleOfThisProblem {
    msg: string = "Witaj swiecie!";

    //problem
    printMessage() {
        return function () {
            console.log(this.msg);
        }
    }
    printMessage2() {
        return () => {
            console.log(this.msg);
        }
    }
}

//problem
var exam = new ExampleOfThisProblem();
var fun = exam.printMessage();
fun();

var fun2 = exam.printMessage2();
fun2();