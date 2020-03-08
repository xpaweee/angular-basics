var ClassInterface = /** @class */ (function () {
    function ClassInterface(msg) {
        this.msg = "Hello";
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var ci = new ClassInterface("Test");
ci.printMsg();
var dog = ({
    name: "Reksio",
    age: 3
});
console.log(dog);
console.log(dog.name);
var json = '{"name": "Max","age": 4}';
var myDog = JSON.parse(json);
console.log(myDog);
