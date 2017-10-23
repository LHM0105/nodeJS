var Event = require("events");

class Player extends Event{}

var player = new Player();

//监听
//play是要监听的事件，播放事件
player.on("play",(track) => {
	//track:从监听事件反馈回来的信息（被推送出来的信息）
	console.log(`监听函数中的信息,${track}`);
});

//只监听一次
//下面推送的信息只有第一条被输出
player.once("play",(track) => {
	console.log(`once监听,${track}`);
});
//推送给监听的函数的信息，从底层向上，推送给play事件的监听对象
player.emit("play","emit中的信息1")
player.emit("play","emit中的信息2")


