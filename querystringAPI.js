var string =  require('querystring');
/*
** 序列化数据
*/
var stringObj = string.stringify({name :'renyang',age :'21',school :'chongyou'});
console.log(stringObj);
/*
 name=renyang&age=21&school=chongyou
*/

var stringObj2 = string.stringify({name :'renyang',age :'21',school :'chongyou'},',');
console.log(stringObj2);
/*
 name=renyang,age=21,school=chongyou
*/


var stringObj3 = string.stringify({name :'renyang',age :'21',school :'chongyou'},',',':');
console.log(stringObj3);
/*
name:renyang,age:21,school:chongyou
*/

/*
** 反序列化数据
*/
var obj1 = string.parse(stringObj);
console.log(obj1);
/*
{ name: 'renyang', age: '21', school: 'chongyou' }
*/

var obj2 = string.parse(stringObj2,',');
console.log(obj2);
/*
{ name: 'renyang', age: '21', school: 'chongyou' }
*/

var obj3 = string.parse(stringObj3,',',':')
console.log(obj3);
/*
{name: 'renyang', age: '21', school: 'chongyou' }
*/

/*
** 转义
*/
var escape1 = string.escape("<哈哈>");
console.log(escape1);
/*
%3C%E5%93%88%E5%93%88%3E
*/

/*
** 反转义
*/
var unescape1 = string.unescape('%3C%E5%93%88%E5%93%88%3E');
console.log(unescape1);
/*
<哈哈>
*/


