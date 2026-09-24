let product = {
    name : "cap",
    price : 500,

    discountprice : function(){
        return this.price -200;
    },
};

console.log(product.discountprice());