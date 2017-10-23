var express = require("express")
var app = express();

app.get("/",(req,res) => {
	res.write('hello');
	res.end();
});

app.get("/login",(req,res) => {
	res.send("send somthing");
})

var server = app.listen(3000,"127.0.0.1",()=>{
	console.log("running")
});
