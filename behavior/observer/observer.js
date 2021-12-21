/**
 * 实现发布订阅的demo
 */

class Order {
  constructor() {
    this.subscribe = {};
  }
  on(type, cb) {
    if (this.subscribe[type]) {
      this.subscribe[type].push(cb);
    } else {
      this.subscribe[type] = [cb];
    }
  }
  emit(type, param) {
    this.subscribe[type].forEach((item) => {
      item(param);
    });
  }
}

let order = new Order();

order.on("click", (param) => {
  console.log("我在点击" + param);
});

order.on("click", (param) => {
  console.log("我在点击111" + param);
});

order.emit("click", "abc");
