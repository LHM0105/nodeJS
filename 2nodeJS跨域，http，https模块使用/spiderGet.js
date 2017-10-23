//爬取其他网站的内容
var https = require("https");
var url = "https://www.lagou.com";
var cheerio = require("cheerio");

//筛选爬取到的页面的代码
function filterMenu(data){
	var $ = cheerio.load(data);
	
	var menu = $(".menu_main");
	var menuData = [];
	menu.each(function(index,val){
		//获取每列菜单标题
		var menuTitle = $(val).find('h2').text();
		//获取每列菜单里的选项
		var menuList = $(val).find("a");
		//创建存储整个菜单的数组
		var menuLists = [];
		
		menuList.each(function(index,value){
			menuLists.push($(value).text());
		});
		
		menuData.push({
			menuTitle:menuTitle,
			menuLists:menuLists
		});
	});
	
	return menuData;
}

function printMenu(menuData){
	menuData.forEach((value) => {
		console.log(value.menuTitle + "\n");
		value.menuLists.forEach((value) => {
			console.log(value);	
		});
		
	});
}
https.get(url,(res)=>{
	var html = "";
	//成功时的回调函数
	res.on("data",function(data){
		html += data;
//		console.log(html);
		
	});
	
	//请求加载完毕后
	res.on("end",function(){
		var menuData = filterMenu(html);
		printMenu(menuData);
	});
})
