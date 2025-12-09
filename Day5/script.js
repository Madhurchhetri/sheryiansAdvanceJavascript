// function instagramParJaoDataLaao(username,cb){
//     setTimeout(()=>{
//         cb({id : 1, username: username , age:25,})
//     },2000)
// }
// instagramParJaoDataLaao("madhur",function(details){
//     console.log(details);
    
// })

// function afterDelay(time,cb){
//     setTimeout(()=>{
//         cb();
//     },time)
// }
// afterDelay(3000,function(){
//     console.log("executed");
    
// })

// function getUser(username,cb){
//     console.log('fetching...');
    
//     setTimeout(()=>{
//         cb({id:1,username:username})
//     },1000)
// }
// function getUserPosts(userId,cb){
//     console.log('fetching posts....');
    
//     setTimeout(()=>{
//         cb(["post1","post2","post3"])
//     },2000)
// }
// getUser("madhur",function(details){
//     console.log(details.username);
    
//     getUserPosts(details.id,function(allPosts){
//         console.log(allPosts);
        
//     })
// })


function loginUser(username,cb){
    console.log('loggin user....');
    
setTimeout(()=>{
    cb({id:1,username:username})
},1500);
}
function fetchPermissions(id,cb){
    console.log('fetching permissions....');
    setTimeout(()=>{
        cb(['read','write','execute'])
    },2000)
}
function loadDashboard(permissions,cb){
    console.log('loading dashboard....');
    setTimeout(()=>{
        cb();
    },2500)
}

loginUser("madhur",function(userData){
    fetchPermissions(userData.id,function(permissions){
        loadDashboard(permissions,function(){
            console.log("Dashboard loaded");
            
        })
    })
})