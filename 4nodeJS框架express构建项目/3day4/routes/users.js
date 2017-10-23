var express = require('express');

//配置数据库参数
var mongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/mydb";

var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//router.get('/test',function(req,res,next){
//	res.render('test',{ title:'这是路由中向test页面发送的内容,from users' })	
//	
//})

////路由到包含表单的html文件
//router.get("/login",function(req,res){
//res.sendFile(__dirname+"/form.html")	
//})

router.post('/save',function(req,res){
	res.send('提交成功');
});

//注册，渲染页面
router.post('/register',function(req,res){
//	console.log(req.body)
//获取表单提交的数据
	var username = req.body.username;
	var psw = req.body.psw;
	
	//插入数据库数据的方法
	var insertData = function(db,callback){
//		//关联集合
		var data = [{username:username,pwd:psw}];//要插入列表的数据,bson,以数组形式插入
	    var conn = db.collection("user");	//获取列表对象
		  conn.insert(data,function(err,results){//向表格插入数据
		  	if(err){
		  		console.log(err)
		  	}else{
		  		callback(results)
		  	}
		  })
	}
	//连接数据库
	mongoClient.connect(DB_CONN_STR,function(err,db){
		if(err){
			console.log("数据库链接失败")
		}else{
			console.log("数据库连接成功")
			insertData(db,function(results){//调用插入数据的方法
				console.log(results)//输出结果，是否插入成功的结果
				res.send("亲 你注册成功了哟 (＾Ｕ＾)ノ~ＹＯ")//句柄函数

				db.close()		//关闭数据库连接
			})
		}
	})	
})

//用户登录，渲染页面
router.all("/login",(req,res,next) => {
	// res.send("登录成功");
	//获取表单信息
	console.log(req.body);
	var username = req.body["username"];
	var pwd = req.body["psw"];

	//查询数据库中的信息函数
	var findData = function(db,callback){
		//对集合进行关联
		var conn = db.collection("user");
		//查询条件
		var data = {username:username,pwd:pwd}
		//查询
		conn.find(data).toArray(function(err,results){
			if(err){
				console.log(err);
			}else{
				callback(results);
			}
		})
	}
	//连接数据库
	mongoClient.connect(DB_CONN_STR,function(err,db){
		if(err){
			console.log(err);
		}else{
			//在数据库中查找数据（调用函数）
			findData(db,function(results){
				console.log(results);
				// res.send("登录成功了！");
				if(results.length>0){

					//用户名存到session中
					req.session.username = results[0].username; //?在哪可以访问到

					//重定向到首页
					res.redirect("/");//重定向的路由写全或者从当前目录下./开始写，./ 相当于  /当前路由文件名
				}else{
					res.send("登录失败");
				}
				//关闭数据库连接
				db.close();
			})
		}
	})
})


module.exports = router;
