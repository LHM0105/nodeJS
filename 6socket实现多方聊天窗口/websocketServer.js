//创建服务端server
//专门给服务端的
var websocketServer = require("ws").Server;

var wss = new websocketServer({
    port:3000
})

var clientMap = new Object;
var i = 0;
//监听客户端的连接请求
wss.on("connection",function(client){
    console.log("服务端发送一条信息")
    
    client.name = i++;
    
    //监听客户端的信息请求
    client.on("message",function(data){
        console.log(data)
        clientMap[client.name] = client;
        //
        broadcast(data,client);
    })
})

// if(req.url != "/favicon.ico"){
function broadcast(data,client){
    // req.url != "/favicon.ico"
    for(key in clientMap){
        clientMap[key].send("客户端"+client.name+"说："+data)
    }
}