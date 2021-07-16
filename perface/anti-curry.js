/**
 * 反柯里化，从字面讲，意义和用法和函数柯里化相比正好相反，扩大使用范围，创建一个应用范围更广的函数
 * 使本来只有特定对象才适用的方法，扩展到更多的对象
 */

Function.prototype.unCurryES5 = function () {
  var self = this;
  return function () {
    var rest = Array.prototype.slice(arguments);
    return Function.prototype.call.apply(self, rest);
  };
};

Function.prototype.unCurryES6 = function () {
  const self = this;
  return function (...rest) {
    return Function.prototype.call.apply(self, rest);
  };
};

function unCurryES5(fn) {
  return function (tar) {
    var rest = Array.prototype.slice.call(arguments);
    rest.shift();
    return fn.apply(tar, rest);
  };
}

function unCurryES6(fn) {
  return function (tar, ...argu) {
    return fn.apply(tar, argu);
  };
}

//将Array上的push方法借出来给argument这样的类数组增加一个元素
var push = unCurryES6(Array.prototype.push);

function execPush() {
  push(arguments, 4);
  console.log(arguments);
}

execPush(1, 2, 3);
