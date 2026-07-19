// create a class car and print name and speed 

class car {
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }

    drive() {
        return this.name + " - " + this.speed;
    }
}

let car1 = new car ("scorpio",180);
let car2 = new car ("hyundai" , 140);