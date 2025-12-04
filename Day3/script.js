// class Expression isme hoisting use nahi hoti ore ye variable me save hota hain 

// let Animal = class {
//     constructor(){
//         this.name = "alexa";
//         this.breed = "dog";
//     }
// }
// let an1 = new Animal();

// ...................................inheritance.............

// class Animal {
//     constructor(){
//         this.legs = 2;
//         this.hands = 2;    
//     }
//     eat(){}
//     breath(){}
// }
// class Kekeda extends Animal{
//     constructor(){
//         super();
//         this.legs = 8;
//         this.hands = 0;
//     }
//     susu(){}
// }
// let k1 = new Kekeda();

// .................. getter and setter .....................

// class Animal{
//     constructor(){
//         this._age =12;
//     }
//     set age(val){
//         if(val<0){
//             console.error("not");
//                 return ;
//         }
//         this._age = val
//         return this._age;
//     }
//     get age(){
//         return this._age;
//     }
// }

// let a1 = new Animal();
// a1.age = 37;

// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// class User{
//     constructor(name , email){
//         this.name = name;
//         this.email = email;
//     }
//     loogedIn(){
//         console.log('log in');   
//     }
// }
// let user1 = new User("madhur" , "jksbd@.com");
// let user2 = new User ( "rahul" , "sbdhbsa@.com");
// console.log(user1);

// let product = {
//     name : "cap",
//     price: 3300,
//     discountPrice : function (){
//         return this.price - 200
//     }
// }
// console.log(product(discountPrice()));
 
// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?


// class Car{
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         console.log(bran +"-" + speed);
        
//     }
// }
// let car1 = new Car("alto",180)
// let car2 = new Car("tata nexon" , 200 )
// console.log(car1);
// console.log(car2);


// ⸻

// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

// class Stuent{
//     constructor(name,rollnumber){
//         this.name = name,
//         this.rollnumber = rollnumber
//     }
//     introduce(){
//         return this.name + " - " + this.rollnumber;
//     }
// }

// let student1 = new Stuent("madhur",12)

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

// ⸻

// function User (name){
//     this.name = name;
//     this.logIn = function(){
//         console.log('logged In');
        
//     }
// }

// // User.prototype.logIn = function(){
// //     console.log('logged in');  
// // }

// let user1 = new User("madhur")
// console.log(user1);
// let user2 = new User("rahul")
// console.log(user2);

// console.log(user1.logIn===user2.logIn);

// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.

function abcd(a,b,c){
    console.log(this.name);
    
}
let obj={
    name :"madhur",
}

// abcd.call(obj)
// abcd.apply(obj,[1,2,3])

let fnc = abcd.bind(obj);
fnc();