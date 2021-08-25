/**
 * 每次访问者来访问，返回的都是同一个实例；
 * 如果一开始实例没有创建，那么这个特定类需要自行创建这个实例；
 */

//IIFE 方式创建单例模式
const Singleton = (function () {
  let _instance = null; // 存储单例
  const Singleton = function () {
    if (_instance) return _instance; // 判断是否已有单例
    _instance = this;
    this.init(); // 初始化操作
    return _instance;
  };

  Singleton.prototype.init = function () {
    this.foo = "Singleton Pattern";
  };

  Singleton.getInstance = function () {
    if (_instance) return _instance;
    _instance = new Singleton();
    return _instance;
  };

  return Singleton;
})();

// const visitor1 = new Singleton();
// const visitor2 = new Singleton(); // 既可以 new 获取单例
// const visitor3 = Singleton.getInstance(); // 也可以 getInstance 获取单例

// console.log(visitor1 === visitor2); // true
// console.log(visitor1 === visitor3); // true

// 块级作用域方式创建单例
let getInstance;

{
  let _instance = null; // 存储单例

  const Singleton = function () {
    if (_instance) return _instance; // 判断是否已有单例
    _instance = this;
    this.init(); // 初始化操作
    return _instance;
  };

  Singleton.prototype.init = function () {
    this.foo = "Singleton Pattern";
  };

  getInstance = function () {
    if (_instance) return _instance;
    _instance = new Singleton();
    return _instance;
  };
}

const visitor1 = getInstance();
const visitor2 = getInstance();

console.log(visitor1 === visitor2);

// 输出: true
