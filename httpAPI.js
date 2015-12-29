var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	'content':'你好',
	'cid':318
})
var options = {
	hostname :'...',
	port :80,
	path :'...',
	method :'POST',
	headers :{
		

	}

}

var req = http.request(options,function(res){
	console.log('status:' + res.statusCode);
	console.log('headers:' + JSON.stringify(res.headers));
	res.on('data',function(chunk){
		console.log(chunk);
	})
	res.on('end',function(){
		console.log('评论结束');
	})
})
req.on('error',function(e){
	console.log('error:'+e.message);
})
req.write(postData);
req.end();