const http=require("http");
const port=8081;
const todolist=["learn","apply","things","succeed"];
http.
createServer((req,res) => {
   /* res.writeHead(200,{ "Content-Type" : "text/html" });
    res.write("<h2>Server Started 12356</h2>");
    res.end();*/
    const { method,url }=req;
    if(url==="/todos"){
        if(method==="GET"){
            res.writeHead(200);
            res.write(todolist.toString());
        }
        else if(method==="POST"){
            let body="";
            req
               .on("error",(err)=> {
                console.log(err);
               })
               .on("data",(chunk)=>{
                  body=body+chunk;
                  console.log(chunk);
               })
               .on("end",()=>{
                body=JSON.parse(body);
                let newtodo=todolist;
                newtodo.push(body.name);
                console.log("data" ,body);
               });
            
        }else if(method==="DELETE"){
            let body="";
            req
               .on("error",(err)=> {
                console.log(err);
               })
               .on("data",(chunk)=>{
                  body=body+chunk;
                  console.log(chunk);
               })
               .on("end",()=>{
                body=JSON.parse(body);
                let deletethisitem=body.name;
                todolist.find((elem,index)=>{
                    if(elem===deletethisitem){
                        todolist.splice(index,1);
                    }       
                    
                });
               });
            }
        else{
            res.writeHead(501);
        }
    }
    res.end();
})

.listen(port, () => {
    console.log(`Node js server started running on port  : ${port}`);
});
/*
const express = require("express");
const app=express();
app.use(express.json());
const port=8081;
const todolist =["learn","apply","things","succeed","Twinkle"];
//http://localhost:8081/todos
app.get("/todos",(req,res)=>{
   res.status(200).send(todolist);
});
app.listen(port,()=>{
  console.log("Express js server started");
});*/