// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();
var request = require('request');
//var bodyParser = require('body-parser')
// App 全局配置
//app.set('views', 'cloud/views'); // 设置模板目录
//app.set('view engine', 'jade'); // 设置 template 引擎
//app.use(bodyParser()); // 读取请求 body 的中间件

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
// app.get('/', function(req, res) {
//   res.send('index')
// })

app.get('/', function(req, res) {
  request({
    url: 'https://api.pushbullet.com/v2/pushes',
    method: 'POST',
    formData: {
      "type": "note",
      "title": "Note Title",
      "body": "你好"
    },
    headers: {
      'Authorization': 'Bearer 3dWeX1o53rCIHA71KwHamozU1DuFWu20',
      'Content-Type': 'application/json'
    }
  }, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info.stargazers_count + " Stars");
      console.log(info.forks_count + " Forks");
    } else console.log(body)
  })
})

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen()