/**
 * 抽象部分和实现部分可能不好理解
 * 香蕉，苹果，橘子，他们的共同抽象部分是水果可以吃
 * 实现部分是不同的水果实体
 */

/**
 * 特点：
 * 1.将抽象和现实分离，互相独立互不影响
 * 2.产品有多个维度（部件），每个维度都可以独立变化（实例化过程），洗衣机这个例子的维度就是电机、滚筒、变频器，
 *   洗衣机产品在这几个维度可以独立地进行变化，从而组装成不同的洗衣机产品；
 */

//Demo 变频洗衣机

class Watcher {
  constructor(motor, roller, transducer) {
    this.motor = new Motor(motor);
    this.roller = new Roller(roller);
    this.transducer = new Transducer(transducer);
  }
  run() {
    this.motor.run();
    this.roller.run();
    this.transducer.run();
  }
}

class Motor {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name + "电机开始工作");
  }
}

class Roller {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name + "滚筒开始工作");
  }
}

class Transducer {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name + "变频开始工作");
  }
}

new Watcher("大功率", "直立", "小功率").run();
