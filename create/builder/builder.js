/**
 * 在建造者模式中，我们关心的是对象的创建过程
 * 因此我们通常将创建复杂对象的模块化
 * 使得被创建的对象的每一个子模块都可以得到高质量的复用
 */

class CarBuilder {
  constructor({ color = "red", weight = 0 } = {}) {
    this.color = color;
    this.weight = weight;
  }

  //构建发动机
  buildTyre(type) {
    const tyreInfo = {};
    switch (type) {
      case "small":
        tyreInfo.name = "小轮胎";
        tyreInfo.desc = "正在使用小轮胎";
        break;
      case "noraml":
        tyreInfo.name = "中轮胎";
        tyreInfo.desc = "正在使用中轮胎";
        break;
      case "big":
        tyreInfo.name = "大轮胎";
        tyreInfo.desc = "正在使用大轮胎";
        break;
    }
    this.tyreInfo = tyreInfo;
  }

  //构建轮胎
  buildEngine(type) {
    const engineInfo = {};
    switch (type) {
      case "small":
        engineInfo.name = "小发动机";
        engineInfo.desc = "正在使用小发动机";
        break;
      case "noraml":
        engineInfo.name = "中发动机";
        engineInfo.desc = "正在使用中发动机";
        break;
      case "big":
        engineInfo.name = "大发动机";
        engineInfo.desc = "正在使用大发动机";
        break;
    }
    this.engineInfo = engineInfo;
  }
}

class BenChiDirector {
  constructor(tyre, engine, param) {
    const _car = new CarBuilder(param);
    _car.buildTyre(tyre);
    _car.buildEngine(engine);
    return _car;
  }
}

let benchi = new BenChiDirector("big", "big");

console.log(benchi);

//使用链式调用法
class CarBuilder {
  constructor({ color = "red", weight = 0 } = {}) {
    this.color = color;
    this.weight = weight;
  }

  //构建发动机
  buildTyre(type) {
    const tyreInfo = {};
    switch (type) {
      case "small":
        tyreInfo.name = "小轮胎";
        tyreInfo.desc = "正在使用小轮胎";
        break;
      case "noraml":
        tyreInfo.name = "中轮胎";
        tyreInfo.desc = "正在使用中轮胎";
        break;
      case "big":
        tyreInfo.name = "大轮胎";
        tyreInfo.desc = "正在使用大轮胎";
        break;
    }
    this.tyreInfo = tyreInfo;
    return this;
  }

  //构建轮胎
  buildEngine(type) {
    const engineInfo = {};
    switch (type) {
      case "small":
        engineInfo.name = "小发动机";
        engineInfo.desc = "正在使用小发动机";
        break;
      case "noraml":
        engineInfo.name = "中发动机";
        engineInfo.desc = "正在使用中发动机";
        break;
      case "big":
        engineInfo.name = "大发动机";
        engineInfo.desc = "正在使用大发动机";
        break;
    }
    this.engineInfo = engineInfo;
    return this;
  }
}

class BenChiDirector {
  constructor(tyre, engine, param) {
    const _car = new CarBuilder(param).buildTyre(tyre).buildEngine(engine);
    return _car;
  }
}

let benchi = new BenChiDirector("big", "big");

console.log(benchi);
