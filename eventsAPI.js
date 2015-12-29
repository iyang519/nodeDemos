var EventEmitter = require('events').EventEmitter;
var study = new EventEmitter();

//类似addEventListener
/*
	一个事件注册不能超过10个监听器，可能会内存泄露
	warning: possible EventEmitter memory leak detected. 11 study listeners added. Use emitter.setMaxListeners() to increase limit.
	解决方法是设置setMaxListeners
*/
study.setMaxListeners(11);
function studying1(who){
	console.log(who + ' is studying1');
}
study.on('study',studying1);
study.on('study',function(who){
	console.log(who + ' is studying2');
})

study.on('study',function(who){
	console.log(who + ' is studying3');
})

study.on('study',function(who){
	console.log(who + ' is studying4');
})

study.on('study',function(who){
	console.log(who + ' is studying5');
})

study.on('study',function(who){
	console.log(who + ' is studying6');
})

study.on('study',function(who){
	console.log(who + ' is studying7');
})
study.on('study',function(who){
	console.log(who + ' is studying8');
})

study.on('study',function(who){
	console.log(who + ' is studying9');
})

study.on('study',function(who){
	console.log(who + ' is studying10');
})
study.on('study',function(who){
	console.log(who + ' is studying11');
})
study.on('play',function(who){
	console.log(who + ' is playing1');
})
study.on('play',function(who){
	console.log(who + ' is playing2');
})

//emit 返回值为是否注册该事件
var hasStudy = study.emit('study','renyang');
var hasPlay = study.emit('play','renyang');
console.log(hasPlay);
console.log(hasStudy);

//移除一个监听，第二个参数不能是匿名函数
study.removeListener('study',studying1);
//移除所有的监听
//study.removeAllListeners();
//设置移除其中一组监听
study.removeAllListeners('study');


//查看注册该事件的数量
var hasStudyLength = study.listeners('study').length;
var hasPlayLength = study.listeners('play').length;
console.log(hasStudyLength);
console.log(hasPlayLength);


