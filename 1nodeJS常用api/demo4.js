var url = require("url")

//地址字符串转化为对象
var urlobj = url.parse("http://baidu.com/api/index.php");
console.log(urlobj);

var urlObj = {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'baidu.com',
  port: null,
  hostname: 'baidu.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/api/index.php',
  path: '/api/index.php',
  href: 'http://baidu.com/api/index.php' };
  
var urlStr1 = url.format(urlObj);
console.log(urlStr1);

//合并基本路径和扩展路径
var urlStr2 = url.resolve('http://www.baidu.com/api/','index2');
console.log(urlStr2);