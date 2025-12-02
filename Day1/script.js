let obj ={
    name :"madhur",
    age: 25,
    email: "h@h.com",
    address: "premnagar, dehradun",
}

// classes ,blueprint classes banate hain taaki hume har baar ek new object mil jaye 
// constructor

// class Remote{
//     constructor(){
//         this.name = "ParleG";
//         this.price = 5;
//     }
// }
// let remote = new Remote();
// console.log(remote);

class Kitaab {
    constructor(name,price,author,color){
        this.name = name;
        this.price = price;
        this.author = author;
        this.color = color;
    }
    pannaPalto(){

    }
    bookMarkLagao(){}
    padLo(){}
}
class User{
    constructor(){
        this.username = "madhur chhetri";
        this.age = 25;
        this.email = "sdsad";
    }
    saansLo(){}
}

let k1 = new Kitaab("moral",120,"madhur","white");
let k2 = new Kitaab("cs",1500,"madhue1","green");
let k3 = new Kitaab('constitution',362,"BRAmbedkar",'dark blue')