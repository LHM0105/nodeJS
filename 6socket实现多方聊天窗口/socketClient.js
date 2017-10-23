//创建服务端
var net = require("net")
var hostname = "127.0.0.1";
var port = 9000;

//创建客户端socket，利用node中的模块直接实例化
var client = new net.Socket();
//设置客户端编码格式
client.setEncoding("utf-8");
//与服务端建立连接
client.connect(port,hostname,function(){
    //向服务端发送信息
    client.write("hello，这是客户端发来的信息");
})

//接收服务端发送的信息
client.on("data",function(data){
    //输出客户端发送的内容
    console.log(`${data}`);
    say()
})

//引入插件，逐行读取
const readline = require("readline");

//建立通道标准
var r1 = readline.createInterface({
    input:process.stdin,//input标准
    output:process.stdout//out标准
})

//函数，输出客户端说的内容
function say(){
    r1.question("请输入：",function(inputStr){
        if(inputStr == "bye"){
            client.destroy()
            console.log("客户端的socket退出")
        }else{
            //写入信息
            client.write(inputStr + "\n")
        }
    })//question设置通道
}