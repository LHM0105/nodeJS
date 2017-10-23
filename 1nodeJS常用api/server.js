//创建服务端口
const http = require("http")
const port = 3000;//端口号1000-9999；0-2^16
const host = "127.0.0.1";//指定host地址

//创建服务对象
var httpServer = http.createServer(function(req,res){
	//设置状态码
	res.status = 200;
	//设置请求头信息
	res.setHeader("Content-Type","text/html;charset='utf-8'");
	//text/plain允许任意格式
	//句柄函数
	res.write("<p>从服务端返回的值</p>")
	res.end();
});

httpServer.listen(port,host,function(){
	console.log("running at http://" + host + ":" + port);
});
