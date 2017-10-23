//创建服务端的服务端口
var net = require("net");
var clientServer = net.createServer();

//创建客户端map？？？
var clientMap = new Object;
//添加一个标识
var i = 0;

//接收客户端的连接
//使用on监听connection事件
clientServer.on("connection",function(client){
    console.log("与客户端连接成功，客户端发来一条信息")
    
    client.name = i++;
    clientMap[client.name] = client;
    //接收服务端发送的信息，并输出
    client.on("data",function(data){
        console.log(`客户端传来:${data}`)
        
        //客户端发送信息
        client.write("这是服务端发送的信息");
        broadcast(data,client);
    })

})

function broadcast(data,client){
    for(key in clientMap){
        clientMap[key].write(client.name+"说："+data);
    }
}
//监听端口
clientServer.listen(9000);