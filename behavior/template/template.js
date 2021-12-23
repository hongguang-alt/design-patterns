/**
 * 模板方法模式的优缺点：
 *
 * 优点：
 * 1.封装了不变部分，扩展可变部分，把算法中不变的部分封装到父类中直接实现，而可变的部分由子类继承后再具体实现；
 * 2.提取了公共代码部分，易于维护， 因为公共的方法被提取到了父类，那么如果我们需要修改算法中不变的步骤时，
 *   不需要到每一个子类中去修改，只要改一下对应父类即可；
 * 3.行为被父类的模板方法固定， 子类实例只负责执行模板方法，具备可扩展性，符合开闭原则；
 *
 * 缺点：
 * 增加了系统复杂度
 */

//demo 制作咖啡的过程

class AbstractDrink {
  constructor() {
    if (new.target === AbstractDrink) {
      throw new Error("抽象类不能直接实例化!");
    }
  }
  //烧水的操作
  boilWater() {
    console.log("烧开水");
  }
  //添加寮包
  addMaterial() {
    throw new Error("抽象方法不能被调用!");
  }
  //倒入杯子
  goToCup() {
    console.log("倒入杯子");
  }
  //添加作料
  addBag() {
    throw new Error("抽象方法不能被调用!");
  }
  template() {
    this.boilWater();
    this.addMaterial();
    this.goToCup();
    this.addBag();
  }
}

class Coffee extends AbstractDrink {
  constructor() {
    super();
  }
  addMaterial() {
    console.log("添加咖啡包");
  }
  addBag() {
    console.log("添加糖");
  }
}

let coffee = new Coffee();
coffee.template()
