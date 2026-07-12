class book {
    constructor(name,version,prize,author,color) {
        this.name = name;
        this.version= version;
        this.prize = prize;
        this.author = author;
        this.color = color;
    }

    pageturn(){}
    bookmark(){}
}

let k1 = new book("math","version1",1200,"rd sharma" , "white");
let k2 = new book("english" , 2009 , 1300 , "vs agraval" , "red");