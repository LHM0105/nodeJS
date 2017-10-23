//删除文件夹，文件
var fs = require("fs");

//删除img文件夹中所有的文件
fs.readdirSync("img").map((file) => {
	fs.unlink(`img/${file}`,(err) => {
		console.log("删除成功");
	});
	
});
fs.rmdir('css',(err) => {
	console.log("删除文件夹成功");
});

