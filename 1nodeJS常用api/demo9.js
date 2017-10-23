var fs = require("fs");

fs.readdir("logs",function(err,data){
	console.log("读取文件夹目录");
	console.log(data);
});
//读取文件内容
fs.readFile("logs/homework.log","utf-8",function(err,data){
	console.log(data);
})
