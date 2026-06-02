// class : blueprint of real object
class Car{
    // constructor
    constructor(name, color, engine, brand){
        // properties
        this.color = color;
        this.name = name;
        this.engine = engine;
        this.brand = brand;
    }
    // method : represents functionality of object
    move(){
        console.log(`${this.name} car is moving`)
    }
    start(){
        console.log(`${this.name} has started`)
    }
    stop(){
        console.log(`${this.name} has stopped`)
    }
}
// creating object of classs
let myNewCar = new Car("My New Car","Black", "Engine 45", "My Own Brand")
myNewCar.start()
myNewCar.move()
myNewCar.stop()
console.log("color of my car: ", myNewCar.color)