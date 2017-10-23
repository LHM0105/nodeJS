
var http = require("http")
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
//	if()
	res.write('hello world');
	console.log('good');
	res.end();
}).listen(3000);
