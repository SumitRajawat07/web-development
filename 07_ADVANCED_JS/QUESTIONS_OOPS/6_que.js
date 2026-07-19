function abcd() {
    console.log(this.name);
}

let obj = {
name:"sumit",
};

abcd.call(obj)