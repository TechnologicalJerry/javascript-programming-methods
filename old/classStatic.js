class Car {
    constructor(name) {
        this.name = name;
    }
    static hello(x) {
        return "Hello " + x.name;
    }
}
let myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);