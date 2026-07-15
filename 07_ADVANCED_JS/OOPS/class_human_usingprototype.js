class human {
    constructor() {
        this.name = "abcd";
        this.age = 27;
    }
}

human.prototype.saanslo = function() {
    console.log("hey");
};

human.prototype.khaanakhaao = function () {
    console.log("hey");
};

let h1 = new human();
let h2 = new human();

