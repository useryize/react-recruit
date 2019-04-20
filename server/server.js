const express = require('express');
const mongoose = require('mongoose');


// 链接mongo
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);;
mongoose.connection.on('connected', function() {
    console.log('mongo 启动成功');
});
 
// 新建app
const app = express();

// 返回文本
app.get('/', function(req, res) {
    res.send('<h1>1</h1>')
});

// 返回json
app.get('/data', function(req, res) {
    res.json({name: '12'});
});

app.listen(9096, function() {
    console.log('Node app start at port 9093');
});