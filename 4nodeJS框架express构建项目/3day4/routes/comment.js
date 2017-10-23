var express = require('express');
var async = require('async');//引入async

// //配置数据库参数
var mongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/mydb";

var router = express.Router();

//提交评论，渲染页面
router.post('/save',function(req,res){
    // res.send('提交成功');
    
    //获取表单数据
    // console.log(req.body);
    // var title = req.body.title;
    // var text = req.body.text;
    //插入数据库数据的方法
	// var insertData = function(db,callback){
	// 	//关联集合
	// 	var data = [{title:title,con:text}];//要插入列表的数据,bson数据,以数组形式插入
	//     var conn = db.collection("comment");	//获取列表对象
	// 	conn.insert(data,function(err,results){//向表格插入数据
	// 	  	if(err){
	// 	  		console.log(err)
	// 	  	}else{//插入成功执行
	// 	  		callback(results)
	// 	  	}
	// 	})
    // }
    
    // // //插入评论并且更新数据
    var updateData = function(db,callback){
        //关联集合
        var conn = db.collection("comment");
        var ids = db.collection("ids");
        async.waterfall([function(callback){
            ids.findAndModify({name:"comment"},[["_id","desc"]],{$inc:{id:1}},function(err,results){
                callback(null,results.value.id)
            })
        },function(id,callback){
            console.log(req.session.username)
            var data = [{uid:id,title:req.body.title,content:req.body.text,username:req.session.username}];
            conn.insert(data,function(results){
                callback(results)
            })

        }],function(err,results){
            callback(results)
        })
    }

    //连接数据库
    mongoClient.connect(DB_CONN_STR,function(err,db){//db是数据库对象
        if(err){
            console.log("数据库链接失败")
        }else{
            console.log("数据库连接成功")

            //正常插入数据
            // insertData(db,function(results){//调用插入数据的方法
            //     console.log(results)//输出结果，是否插入成功的结果

            //     res.send("评论成功")//句柄函数

            //     db.close()		//关闭数据库连接
            // })

            //关联集合的方式
            updateData(db,function(results){
                console.log(results);
                // res.send("评论成功,更新成功");
                res.redirect('/comment/list');//重定向到列表页
                db.close();
            })
        }
    })	
});


//渲染列表页面
router.get('/list',function(req,res,next){

    //查询数据函数
    var findData = function(db,callback){
        var conn = db.collection("comment");
        conn.find({}).toArray(function(err,results){
            if(err){
                console.log("查询出错:"+err)
            }else{
                callback(results);
            }
        })
    }
    //连接数据库
    mongoClient.connect(DB_CONN_STR, function(err,db){
        if(err){
            console.log('数据库连接失败'+err)
        }else{
            //查询数据库集合
            findData(db,function(results){
                if(results.length > 0){
                    console.log(results);
                    //重定向到列表页
                    res.render('commentList',{results});
                }else{
                    res.send("对不起，暂时没有评论信息")
                }
            })
        }
    })
})

//渲染详情页,渲染页面
router.get('/detail',function(req,res,next){
    console.log("被点击的uid："+req);//获取到被点击的uid
    var uid = parseInt(req.query.uid);
    mongoClient.connect(DB_CONN_STR,function(err,db){
        if(err){
            console.log("数据库连接失败")
        }else{
            var conn = db.collection("comment");//关联集合
            conn.find({uid:uid}).toArray(function(err,results){
                if(err){
                    console.log(err)
                }else{
                    console.log(results);
                    res.render('detail',{res:results})
                }
            })
        }

    })
})

router.get('/deleteOK',function(req,res,next){
    //操作数据库

    console.log(req)
    //操作数据库
    mongoClient.connect(DB_CONN_STR,function(err,db){
        if(err){
            console.log("数据库连接失败-删除数据");
        }else{
            console.log("数据库连接成功-删除数据")
            //关联集合
            var conn = db.collection("comment");
            console.log(req.query.uid);
            var uid = parseInt(req.query.uid);
            conn.remove({uid:uid},function(err,results){
                if(err){
                    console.log("删除数据失败");
                }else{
                    //删除成功
                    res.redirect("./list");
                    // res.send('删除一条数据成功');
                }
            })
        }
    })
})
module.exports = router;
