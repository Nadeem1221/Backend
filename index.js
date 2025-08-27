const express=require("express");

const app=express();  //express object which mean sapp become an object

// console.dir(app);
 let  port = 3000; //we can also use port 8080 -- local host

 //server 
 //if page will show - caanot get\ >>server is created but their is no respond by the server
 app.listen(port,()=>{   //listen for incoming requests
    console.log("app is listening on port",port);
 });


 //app.use() listen all requests
//  app.use((req,res)=>{    //jese hi koi request aigi app.use method request recevied print krba dega terminal me and send response through res.send() method
//   //  console.log(req);   // 
//    console.log("request received");
//    // res.send("This is a basic response");//we can send anything in response like object ,string,etc from our server
//    res.send({
//       name:"nadeem",  //Express convert the response object into json representation
//       Branch:"IT "
//    });
//  });



 //app.get() 
//  app.get("/",(req,res)=>{
//    res.send("you contact root path ,restarted again");
//  });

//  app.get("/apple",(req,res)=>{
//    res.send("you contact apple");
//  });

//  app.get("/orange",(req,res)=>{
//    res.send("you contactorange path");
//  });

//  app.get("*",(req,res)=>{  //default rsponse ,it includes all above response and a defalu respo if user enter invalid rout 
//    res.send("This path does not exist");
//  });


//Path parameters
 app.get("/",(req,res)=>{
   console.log(req.params);      //printed on terminal >>localhost:3000/nadeem-->>output on time will show username nadeem
   res.send("hello,I am root");  //sent to browser
 });

   //printing the username and id entered by user on browser    
       app.get("/:username/:id",(req,res)=>{
         let {username,id}= req.params;
         //console.log(req.params);     
         res.send(`Welcome to the page of @${username} id is${id}.`);  
      });



//Query string -->>"q=" in url

app.get("/search",(req,res)=>{
   console.log(req.query);
   res.send("No results");
});

 //request send through https are text based but express converts the text based request into object 
 //It make the object of request
/*
 Uses of express
 1>Listen for the request
 2>Parshing the request-->>convert text based request inot object
 ***servers are made in diff languages so if we make server in js it recieve text as all
    laguage recieve and it convert the request into object through Express.js thats why we use express
 */


