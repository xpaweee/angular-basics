var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        //msg = 'Hello word'; - ts i tak wie ze to jest string.
        this.msg = "Hello word";
        this.hello4 = function (message) { return console.log("Annonymus " + message); };
    }
    ExampleFunctions.prototype.showMessage = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return "Hello świecie!";
    };
    ExampleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.hello2 = function (message, message2) {
        console.log(message + " " + message2);
    };
    ExampleFunctions.prototype.hello3 = function (message, message2) {
        if (message2 === void 0) { message2 = "hello3"; }
        console.log(message + " " + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.hello();
example.showMessage();
example.hello1("Hello1");
example.hello2("Hello2");
example.hello3("Hello3");
example.hello4("tst");
