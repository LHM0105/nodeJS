//websocket 不用引入，直接使用
//建立链接
var ws = new WebSocket("ws://127.0.0.1:3000");

//初始化
ws.onopen = function(){
    //发送信息给服务端
    ws.send("客户端发送：I am coming")
}
//发送信息

ws.onmessage = function(event){
    
    var chatroom = document.getElementById("chatroom");
    chatroom.innerHTML += "<br/>" + event.data;
}