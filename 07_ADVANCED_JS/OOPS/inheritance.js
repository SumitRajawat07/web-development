class Animal {
    constructor() {
        this.legs = 2;
        this.hand = 2;
    }

    eat(){};
    drink(){};
}

class kekda extends Animal {
    constructor() {
        super();
        this.legs = 4;
        this.hand = 9;
    }

    slowwalk(){}
}
let k1 = new kekda;    