//没成功
var http = require("http");
var querystring = require("querystring");
var postData = querystring.stringify({
	"question[title]":"from hml",
	"question[content]":"<p>别保持了</p>",
	"question[courseId]":"250",
	"question[lessonId]":"2627",
	"_csrf_token":"5e53331d0f30d6385eb2a1a2b600783a280199ef"
})

var options = {
	hostname:"www.codingke.com",
	port:80,
	path:"/ajax/create/course/question",
	header:{
		"Accept":"*/*",
        "Accept-Encoding":"gzip, deflate",
		"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6",
		"Connection":"keep-alive",
		"Content-Length":postData.length,
		"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
		"Cookie":"UM_distinctid=15f29065e9c24-0a73231f30335-414a0229-fa000-15f29065e9f200; PHPSESSID=sjnb49vios8r6e1jn7bcmo1sg5; CNZZDATA1256018185=525552474-1508220130-null%7C1508220130; Hm_lvt_9f92046de4640f3c08cf26535ffdd93c=1508221804; Hm_lpvt_9f92046de4640f3c08cf26535ffdd93c=1508221876; Invite_code=288665",
		"Host":"www.codingke.com",
		"Origin":"http://www.codingke.com",
		"Referer":"http://www.codingke.com/v/250-course",
		"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36",
		"X-CSRF-Token":"5e53331d0f30d6385eb2a1a2b600783a280199ef",
		"X-Requested-With":"XMLHttpRequest"
	}
	//从浏览器请求xhr中复制
};

var requests = http.request(options,(res)=>{
	//设置编码格式
	res.setEncoding("utf-8")
	res.on("data",()=>{
		console.log("提交成功")
	})
	res.on("end",()=>{
		console.log("提交成功")
	})
})

requests.write(postData)
requests.end()