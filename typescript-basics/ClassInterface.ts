
interface IDog {
    name: string;
    age: number;
    date?: Date;
}


class ClassInterface {
    msg: string = "Hello";

    constructor(msg?: string) {

    }

    printMsg() {
        console.log(this.msg);
    }
}


let ci = new ClassInterface("Test");
ci.printMsg();

let dog: IDog = ({
     name: "Reksio", 
     age: 3 
    })

console.log(dog);
console.log(dog.name);

let json = '{"name": "Max","age": 4}';
let myDog: IDog = JSON.parse(json);
console.log(myDog);