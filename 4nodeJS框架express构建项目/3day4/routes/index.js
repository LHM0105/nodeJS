var express = require('express');
var router = express.Router();

/* GET home page. */
// 主页面
router.get('/', function(req, res, next) {
	//把session中的内容传到前端（如果有）也可能没有
  res.render('index', {username:req.session.username});
});

//路由到test页面
router.get('/test',function(req,res,next){
	res.render('test',{ 
		title:'这是路由中向test页面发送的内容',
		html:'<h1>hello,this is h1tag</h1>' 
	})
})

//路由到（包含表单的html）文件
// router.get("/login",function(req,res){
// 	res.sendFile(__dirname+"/form.html")	
// })

//登录页
router.all("/login",function(req,res,next){
	res.render('login',{})
})

//渲染注册页
router.get("/register",function(req,res,next){
	res.render('register',{}) 
})
//注销
router.get("/loginout",function(req,res,next){
	// // 方式一
	// //销毁session，再次转到主页面
	// req.session.destroy(function(err){
	// 	if(err){
	// 		console.log(err);
	// 	}else{
	// 		res.redirect("/")
	// 	}
	// })

	//方式二
	req.session.username = undefined;//删除session中存储的username
	res.redirect("/");//重定向到主页
})

//评论
router.get("/comment",function(req,res,next){
	res.render('comment',{});
})
module.exports = router;
