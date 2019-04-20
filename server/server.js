const express = require('express');
const mongoose = require('mongoose');


// 链接mongo 并使用react这个集合
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);;
mongoose.connection.on('connected', function() {
    console.log('mongo 启动成功');
}); 

// 类似于myspl的表  mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, required: true},
    age: {type: Number, required: true}
}));

// 新增数据
// User.create({
//     user: 'yyyy',
//     age: 18
// }, function (err, doc) {
//     if(!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// }); 
 
// 删除数据
// User.remove({age: 28}, function (err, doc) {
//     if (!err) {
//         console.log(doc);
//     }
// });

// 修改 跟新
User.update({user: 'yyyy'}, {'$set': {age: 15}}, function (err, doc) {
    if (!err) {
        console.log(doc);
    }
});
// 新建app
const app = express();

// 返回文本
app.get('/', function(req, res) {
    res.send('<h1>1</h1>')
});

// 返回json
app.get('/data', function(req, res) {
    // 查找全部
    // User.find({user: 'yyyy'}, function (error, doc) {
    //     res.json(doc);
    // });

    // 只查找一条
    User.findOne({user: 'yyyy'}, function (error, doc) {
        res.json(doc);
    });
    
});

app.listen(9010, function() {
    console.log('Node app start at port 9093');
});