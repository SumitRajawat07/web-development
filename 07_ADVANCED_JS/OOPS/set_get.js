class Animal {
    constructor() {
        this.age = 13;
    }

    set age(val){
        if (val<0){
            console.error("not");
            return;
        }
        this._age = val;
        return this._age;
    }

    get age() {
        return this._age;
    }
}
let a1 = new Animal();
console.log(a1.age);