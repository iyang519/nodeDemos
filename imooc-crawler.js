var http = require('http');
//cheerio 是nodejs特别为服务端定制的，能够快速灵活的对JQuery核心进行实现。它工作于DOM模型上，且解析、操作、呈送都很高效。
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var courseData = '';
	chapters.each(function(item){
		var chapter = $(this);
		courseData += chapter.text();
	})
	return courseData;

}

http.get(url,function(res){
	var html = '';
	res.on('data',function(data){
		html += data;
	});
	res.on('end',function(){
		//console.log(html);
		var chapterContent = filterChapters(html);
		console.log(chapterContent);
	});

}).on('error',function(){
	console.log('数据出错了');

})