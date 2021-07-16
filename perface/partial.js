/**
 * 偏函数是创建一个调用另外一个部分（参数或者变量已预制函数）的函数，函数可以根据传入的参数来生成一个真正执行的函数。
 * 其本身不包括我们真正需要的逻辑代码，只是根据传入的参数返回其他的函数，返回的函数中才有真正的处理逻辑
 */

var isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
};

var isString = type("string");
var isFunction = type("Function");
