/**
 * 本质是功能动态组合，即动态地给一个对象添加额外的职责
 * 就增加功能角度来看，使用装饰者模式比继承更为灵活
 * 好处是有效地把对象的核心职责和装饰功能区分开
 * 并且通过动态增删装饰去除目标对象中重复的装饰逻辑
 */

//毛坯房——目标对象
var originHouse = {
  getDesc() {
    console.log("毛配房");
  },
};

//搬入家具——装饰者
function furniture() {
  console.log("搬入家具 ");
}

//刷墙壁——装饰者
function painting() {
  console.log("墙壁粉刷 ");
}

originHouse.getDesc = (function () {
  let getDesc = originHouse.getDesc;
  return function () {
    getDesc();
    furniture();
  };
})();

originHouse.getDesc = (function () {
  let getDesc = originHouse.getDesc;
  return function () {
    getDesc();
    painting();
  };
})();

originHouse.getDesc();

//给window的onload回调新增方法
window.onload = function () {
  console.log("原先的 onload 事件 ");
};

/* 发送埋点信息 */
function sendUserOperation() {
  console.log("埋点：用户当前行为路径为 ...");
}

/* 给原生事件添加新的装饰方法 */
function originDecorateFn(originObj, originKey, fn) {
  originObj[originKey] = (function () {
    var originFn = originObj[originKey];
    return function () {
      originFn && originFn();
      fn();
    };
  })();
}

// 添加装饰功能
originDecorateFn(window, "onload", sendUserOperation);

// 输出： 原先的 onload 事件
// 输出： 埋点：用户当前行为路径为 ...


