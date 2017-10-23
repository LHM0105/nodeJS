var https = require("https");
var options = {
	hostname:"api.douban.com",
	port: 443,
	// path: "/v2/movie/top250",//前250的电影
	path: "/v2/movie/coming_soon",//最新上映电影条目

	method: "GET"
};

var request = https.request(options,function(res){
	var datas = "";
	res.on("data",(data)=>{
		datas+=data;
	});

	res.on("end",()=>{
		// console.log(JSON.parse(datas));
		console.log("即将上映的电影:");
		JSON.parse(datas).subjects.forEach((value)=>{
			console.log(value.title);
		});
	});
	
})
request.end();