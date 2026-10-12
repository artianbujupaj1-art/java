function shuma(num1,num2,num3){
    var rezultati = num1+num2+num3
    console.log(rezultati)
}

shuma(20,30,40)

function shuma2(num4,num5,num6){
    var rezultati2 = num4-num5-num6
    console.log(rezultati2)
}

shuma2(20,30,40)

function shuma3(num7,num8,num9){
    var rezultati3 = num7/num8/num9
    console.log(rezultati3)
}

shuma3(20,30,40)

function shuma4(num10,num11,num12){
    var rezultati3 = num10*num11*num12
    console.log(rezultati3)
}

shuma4(20,30,40)

var car={
    name:"Mercedes",
    color:"red",
    get getKilometers(){
        return this.kilometers
    }
    set setKilometers(km){
        this.kilometers=km;
    }
}

console.log(car.getKilometers)
car.setKilometers=100;

console.log(car.getKilometers)

var computer= new Object()
computer.name="lenovo";
computer.RAM="16gb";

function Computer (name,CPU,RAM){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM;
}
var computer1= new Computer("Macbook,M1,GB");
var computer2= new Computer("Lenovo,I7,GB");

