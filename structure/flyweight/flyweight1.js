/**
 * 在原型链和组合继承中
 * 在原型链继承和组合继承中，子类通过原型 prototype 来复用父类的方法和属性
 * 如果子类实例每次都创建新的方法与属性
 * 那么在子类实例很多的情况下，内存中就存在有很多重复的方法和属性
 * 即使这些方法和属性完全一样，因此这部分内存完全可以通过复用来优化
 * 这也是享元模式的思想。
 */

/**
 * 传统的享元模式是将目标对象的状态区分为内部状态和外部状态
 * 内部状态相同的对象可以被共享出来指向同一个内部状态。
 */

let examCarNum = 0; //考试驾车的总数目

class ExamCar {
  constructor(type) {
    examCarNum++;
    this.carId = examCarNum;
    this.type = type;
    this.using = false;
  }
  exam(id) {
    return new Promise((reslove, reject) => {
      this.using = true;
      console.log("考生" + id + "驾驶" + this.carId + "进行" + this.type);
      setTimeout(() => {
        this.using = false;
        console.log("考生" + id + "驾驶" + this.carId + "完成" + this.type);
        reslove();
      }, Math.random() * 2000);
    });
  }
}

//手动挡对象池
handCarPool = {
  _pool: [],
  _examer: [],
  //注册手动挡的车子
  initHandCar(nums) {
    for (let i = 0; i < nums; i++) {
      this._pool.push(new ExamCar("手动挡"));
    }
  },
  //注册用户
  registerExamer(list) {
    list.forEach((item) => {
      this.selectCar(item);
    });
  },
  //开车选择
  selectCar(id) {
    let car = this.getFreeCar();
    if (car) {
      car.exam(id).then(() => {
        if (this._examer.length > 0) {
          let nextId = this._examer.shift();
          this.selectCar(nextId);
        }
      });
    } else {
      this._examer.push(id);
    }
  },
  //获取空闲的车
  getFreeCar() {
    return this._pool.find((item) => !item.using);
  },
};

handCarPool.initHandCar(3);
handCarPool.registerExamer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

