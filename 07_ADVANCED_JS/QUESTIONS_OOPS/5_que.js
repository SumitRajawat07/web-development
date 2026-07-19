class student {
    constructor(name,rollno){
        this.name = name;
        this.rollno = rollno;
    }

    printboth(){
        return this.name + " " + this.rollno;
    }
}

let student1 = new student("sumit" , 12123);
let student2 = new student("pratvi" , 13131);

