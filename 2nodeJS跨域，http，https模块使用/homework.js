//用get方法
//http默认端口号是80
//https默认端口号是443

//用get方法爬取网站信息
var https = require("https");
var url = "https://www.taobao.com/";
//为使用jquery，引入cheerio插件，同时需要在cmd命令窗口安装
var cheerio = require("cheerio");

function filterdata(data){
    var $ = cheerio.load(data);
    var plList = $(".service-bd li");
    console.log(plList);
    // console.log(menu);
    // var dataLists =[];
    plList.each(function(index,value){
        // var aPl = {
        //     tit:$(value).find('.text').text()
        // }
        console.log($(value).find("a").text());
    });

}
https.get(url,(res)=>{
    var html = "";
    res.on("data",(data)=>{
       html+=data;
    //    console.log(html);
    });

    //句柄函数
    res.on("end",()=>{
        filterdata(html);
    });
});