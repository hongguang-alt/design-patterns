/**
 * 对象有有限多个状态，且状态间可以相互切换；
 * 各个状态和对象的行为逻辑有比较强的对应关系，即在不同状态时，对应的处理逻辑不一样；
 */

//状态模式把每种状态和对应的处理逻辑封装在一起（后文为了统一，统称封装到状态类中）

/**
 * 用某种状态去控制行为
 */

//ES5代码

//抽象状态类
const AbstractState = function () {};
AbstractState.prototype.employ = function () {
  throw new Error("抽象方法不能调用");
};

//交通灯的状态
const State = function (name, desc) {
  this.state = { name, desc };
};
State.prototype = new AbstractState();
State.prototype.employ = function (trafficLight) {
  console.log("交通灯颜色变为 " + this.state.name + "，" + this.state.desc);
  trafficLight.setState(this);
};

//交通灯
const Traffic = function () {
  this.state = null;
};
Traffic.prototype.getState = function () {
  return this.state;
};
Traffic.prototype.setState = function (traffic) {
  this.state = traffic;
  console.log("当前交通灯是", this.state.state.name);
};

let redState = new State("红灯", "行人停，汽车行");
let greenState = new State("绿灯", "行人行，汽车停");
let yellowState = new State("黄灯", "行人停，汽车停");

let traffic = new Traffic();

redState.employ(traffic);
greenState.employ(traffic);
yellowState.employ(traffic);
