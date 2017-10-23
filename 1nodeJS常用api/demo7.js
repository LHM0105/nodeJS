var fs = require("fs");
//创建文件夹
//fs.writeFile("logs");
fs.mkdir("logs",(error)=>{
	console.log("新增成功")
});
