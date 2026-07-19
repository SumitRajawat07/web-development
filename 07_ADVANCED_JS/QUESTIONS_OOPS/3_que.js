let product = {
    name: "cap",
    prize : 880,

    discountprize : function() {
        return this.prize -200;
    }, 
};

console.log(product.discountprize());