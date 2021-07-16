/**
 * 核心思想是把多参数传入的函数拆成单（或部分）参数函数，内部再返回调用下一个单（或部分）参数函数，依次处理剩余函数
 */

function curryingES5(fn) {
  var rest1 = Array.proptype.slice.call(arguments);
  rest1.shift();
  return function () {
    var rest2 = Array.proptype.slice.call(arguments);
    return fn.apply(null, rest1.concat(rest2));
  };
}

function curryingES6(fn, ...rest1) {
  return function (...rest2) {
    return fn.apply(null, rest1.concat(rest2));
  };
}

function sayHello(name, age, fruit) {
  console.log(`我叫${name},我已经${age}岁了,我喜欢吃${fruit}`);
}

const curryingShowMsg1 = curryingES6(sayHello, "小明");
curryingShowMsg1(18, "苹果");

const curryingShowMsg2 = curryingES6(sayHello, "小红", 22, "西瓜");
curryingShowMsg2();
