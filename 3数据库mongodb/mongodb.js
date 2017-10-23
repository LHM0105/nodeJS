var Mongodb = require("mongodb");
//链接到mongodb的服务端口
var  server = new Mongodb.Server("localhost",27017,{auto_reconnect:true});

var db = new Mongodb.Db("jingjing",server,{safe:true});

//链接数据库
db.open((err,db)=>{
    if(err){
        console.log("连接失败");
    }else{
        console.log("链接成功");
    }
});

// var Mongodb= require("mongodb")
// var server = new Mongodb.Server("localhost",27017,{auto_reconnect:true})

// var db = new Mongodb.Db("jc",server,{safe:true})

// db.open((err,db)=>{
// 	if(err){
// 		console.log("data-error")
// 	}else{
// 		console.log("success")
// 	}
// }) 