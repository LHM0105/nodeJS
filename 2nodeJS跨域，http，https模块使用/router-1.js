//模拟前端
var http = require("http");
var url = require("url");

var router = require("./modules/router.js");

http.createServer(function(req,res){
	if(req.url != "/favicon.ico"){
		//获取到地址栏/后的内容
		var pathname = url.parse(req.url).pathname.replace(/\//,'');		
//		console.log(pathname);

		res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
		//try，catch是try中代码执行出错进行catch
		
		try{
			//跳转到对应页面
			router[pathname](req,res);
			
		}catch(err){
			console.log(err);
			router["home"](req,res);
		}
	}
	
	// res.end();
}).listen(8000,"127.0.0.1",function(){
	console.log("start running");
})
