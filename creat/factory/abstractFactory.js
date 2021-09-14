/**
 * 抽象工厂模式
 */

//饭店方法
class Restaurant {
  static orderDish(type) {
    switch (type) {
      case "鱼香肉丝":
        return new YuXiangRouSi();
      case "宫保鸡丁":
        return new GongBaoJiDing();
      default:
        throw new Error("本店没有这个菜!");
    }
  }
}

//菜品抽象类
class Dish {
  constructor() {
    if (new.target === Dish) {
      throw new Error("抽象类不能直接实例化!");
    }
    this.kind = "菜";
  }
  eat() {
    throw new Error("抽象方法不能调用!");
  }
}

//鱼香肉丝类
class YuXiangRouSi extends Dish {
  constructor() {
    super();
    this.type = "鱼香肉丝";
  }
  eat() {
    console.log(`${this.kind}-${this.type}真的好好吃`);
  }
}

//宫保鸡丁类
class GongBaoJiDing extends Dish {
  constructor() {
    super();
    this.type = "宫保鸡丁";
  }
  eat() {
    console.log(`${this.kind}-${this.type}真的好好吃`);
  }
}

const dish0 = new Dish();
const dish1 = Restaurant.orderDish("鱼香肉丝");
dish1.eat();
const dish2 = Restaurant.orderDish("红绕肉");
