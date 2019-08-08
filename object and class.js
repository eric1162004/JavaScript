function car(type, color, miles) {
    this.type = type;
    this.color = color;
    this.miles = miles;
}

var car1 = new car("Compact", "blue", 6580);
var car2 = new car("Truck", "red", 397);
var car3 = new car("SUV", "yellow", 9940);