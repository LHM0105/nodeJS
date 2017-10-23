var fs = require("fs");
//fs.writeFile("logs/homework.log","写入homework.log的内容",(err)=>{
//	console.log('生成成功');
//});

//修改文件中的内容？
fs.appendFile("logs/homework1.log","向homework.log追加的内容",(err)=>{
	console.log("追加成功");
});