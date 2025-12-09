//  const prm = new Promise((res,rej)=>{
//     let num =  Math.floor(Math.random()*10);
//         setTimeout(()=>{
//             if(num>5){
//                 res(` sucess : ${num}`);
//             }else{
//                 rej(` failed : ${num}`);
//             }
            

//         },2000)
//  })

//  prm.then((value)=>{
//    console.log(value);
   
    
//  }).catch((value)=>{
//     console.log(value);
    
    
//  })

// fetch('https://randomuser.me/api/')
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(data.results[0].name.first);
    
// })

async function getRandomUser(){
   try{ 
    let res = await fetch('https://randomuser.me/api/');
    let data = await res.json();
    console.log(data.results);
}catch (error) {
    console.error("Error fetching user:", error);
  }
    
}
getRandomUser();


