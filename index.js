const express =require('express')
const WebSocket = require("ws") 
const app =express()
const server =require('http').createServer(app)

const wss = new WebSocket.Server({server: server})

wss.on('connection', function connection(ws) {
    function doSetTimeout(i){
        setTimeout(function(){
            console.log("i :" , i)
           
            ws.send(Math.floor(Math.random() * 500));
        },i*3000)
    }
    
    ws.on('error', console.error);
    console.log("Server : New Client connected to Server")
    ws.on('message', function message(data) {
      console.log('Server: Received Data from Client : %s', data);
      for(let i =0 ;i<5 ;i++){
        doSetTimeout(i)
    }
    });

    
    


    
  });



app.get('/',(req,res)=> res.send("Hello World !!"))

server.listen(3000 ,()=> console.log("Listening on port 3000"))