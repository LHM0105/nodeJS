var file = require("./file.js");

module.exports = {
	login:function(req,res){
		res.write("这是登录页");
		res.end();
	},
	regist:function(req,res){
		res.write("这是注册页")
		res.end()
	},
	home:function(req,res){
		file.readFile("./view/index.html",res);
	},
	img:function(req,res){
		file.readImg("./img/back3.png",res)
	}
}
