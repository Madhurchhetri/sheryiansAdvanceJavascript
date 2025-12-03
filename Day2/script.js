// class Sketch{
//     constructor(){
//         this.character = "doremon";
//         this.color = "blue";
//     }
//     speak(){}
//     walk(){}
// }

// // Sketch.prototype.speak = function(){};

// let Sketch1 = new Sketch();

// console.log(this);
// function abcd(){
//     // console.log(this);
//     let obj = {
//         name : "madhur",
//         fnc : function (){
//             // console.log(this);
            
//             let def =()=>{
//                 console.log(this);
                
//             }
//             def()
//         }
//     }
//     obj.fnc()
// }
// abcd()




// ek function me this ki value function window hoti hain agar hum chahte hai wo window na ho object ho tb hum call apply bind ka use karte hain

// let obj = {
//     name : "madhur",
// };
// function abcd(a , b , c){
//     console.log(this ,a,b,c)
// }
// abcd.call(obj);
// abcd.apply(obj , [1,2,3]);