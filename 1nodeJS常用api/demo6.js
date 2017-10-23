var fs = require('fs');
//查看文件相关信息
fs.stat("demo1.js",(error,stats) => {
	console.log(stats);
	console.log(`目录${stats.isDirectory()}`);
	console.log(`文件${stats.isFile()}`);
});
