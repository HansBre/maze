const express = require('express');
const app = express();
const path = require('path');
const __index = path.join(__dirname,'dist/index.html');






app.use(express.static('dist'));

app.get('/*',(req,res)=>{
    res.sendFile(__index);
});

app.listen(4200,()=>{
    console.log("Server is listening on port 4200");
});

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

let screenClient = null;
let controller = null;
wss.on('connection', function connection(ws) {
    if(!screenClient){
        screenClient = ws;
        console.log("Screen is good");
        return;
    }else if(!controller){
        controller = ws;
        console.log("Controller is good");
        controller.on("message",(msg)=>{
            screenClient.send(msg);
        });
    }
});