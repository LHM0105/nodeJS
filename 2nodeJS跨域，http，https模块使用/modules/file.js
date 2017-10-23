//模拟后端
var fs = require("fs");
//暴露
module.exports = {
    readFile:function(path,res){
        fs.readFile(path,"utf-8",(err,data)=>{
            //输出读取到的内容
            res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
            res.write(data);
            res.end();
        })
    },
    // readImgs:function(path,res){
    //     fs.readFile(path,"binary",(err,data)=>{
    //         //输出读取到的内容
    //         res.writeHead(200,{"Content-type":"image/jpeg"});
    //         res.write(data);
    //         res.end();
    //     })
    // },
    readImg:function(path,res){
        fs.readFile(path,"binary",(err,data)=>{
            res.writeHead(200,{"Content-type":"image/jpeg"});
            res.write(data,"binary");
            res.end();
        });
    }
}