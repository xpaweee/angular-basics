class ExampleFunctions {

    //msg = 'Hello word'; - ts i tak wie ze to jest string.
    msg: string = "Hello word";

    showMessage(): void {
        console.log(this.msg);
    }

    hello(): string {
        return "Hello świecie!"
    }

    hello1(message: string) {
        console.log(message);
    }

    hello2(message: string, message2?: string) {
        console.log(message + " " + message2);
    }

    hello3(message: string, message2 = "hello3") {
        console.log(message + " " + message2);
    }

    hello4 = message => console.log("Annonymus " + message);

    hello5 = () => console.log("hello5");

    hello6 = (message: string): string => { return "Hello6" + message };

}

var example = new ExampleFunctions();
example.hello();
example.showMessage();
example.hello1("Hello1");
example.hello2("Hello2");
example.hello3("Hello3");
example.hello4("tst");
