function createpencil(name,price,color,company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;

    this.write = function(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
    };
}

let pencil1 = new createpencil("doms" , 5 , "black" , "doms");
let pencil2 = new createpencil("natraj" , 10 , "red" , "natraj");
let pencil3 = new createpencil("apsara" , 10 , "yellow" , "apsara");