var http = require("http");
//var util = require("./util.js");
var add = require("./util.js").add;
var sayHello = require("./util.js").sayHello;
//创建服务端口
http.createServer(function(req,res){
	//写入头信息
	res.writeHeader(200,{"Content-Type":"text/html;charset='utf-8'"})
//	var str = util.sayHello();
//	console.log(str);
//	res.write(str);
//	var sAdd = add(2,4).toString();
//	console.log(sAdd);
//	res.write(sAdd);
//	
//	var sHello = sayHello();
//	res.write(sHello);
//	res.end();
	
	var str = sayHello();
	writeMode(res,str);
}).listen(3000);//端口号0-10000，3333,8000不能用

function writeMode(res,str){
	res.write(str);
	res.end();
}
