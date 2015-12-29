var url = require('url');
var imooc = url.parse("http://www.imooc.com/index/search?words=node");
console.log(imooc);

/*
{ protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com',
  port: null,
  hostname: 'www.imooc.com',
  hash: null,
  search: '?words=node',
  query: 'words=node',
  pathname: '/index/search',
  path: '/index/search?words=node',
  href: 'http://www.imooc.com/index/search?words=node' }

*/

var imoocQuery = url.parse("http://www.imooc.com/index/search?words=node&keys=node",true);
console.log(imoocQuery);
/*
区别在于query变为一个数组
{ protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com',
  port: null,
  hostname: 'www.imooc.com',
  hash: null,
  search: '?words=node&keys=node',
  query: { words: 'node', keys: 'node' },
  pathname: '/index/search',
  path: '/index/search?words=node&keys=node',
  href: 'http://www.imooc.com/index/search?words=node&keys=node' }
*/

var imoocUrl = url.format(imooc);
console.log(imoocUrl);

/*
 http://www.imooc.com/index/search?words=node
*/

var completePath = url.resolve("http://imooc.com",'/course/list');
console.log(completePath);
/*
 http://imooc.com/course/list
*/