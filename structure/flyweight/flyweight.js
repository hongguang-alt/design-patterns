/**
 * 享元模式的主要思想是共享细粒度对象
 * 也就是说如果系统中存在多个相同的对象，那么只需共享一份就可以了
 * 不必每个都去实例化每一个对象，这样来精简内存资源，提升性能和效率。
 */

var candidateNum = 10; //考生数量
var examCarNum = 0; //驾考车的数量

function examCar(type) {
  examCarNum++;
  this.cardId = examCarNum;
  this.type = type;
}

examCar.prototype.exam = function (id) {
  console.log("考生" + id + "驾驶" + this.cardId + "进行" + this.type);
};

for (let i = 0; i < candidateNum; i++) {
  let car = new examCar(i % 2 === 0 ? "自动挡" : "手动挡");
  car.exam(i);
}

console.log("车子" + examCarNum);

//这里有十个车子，占据了大量的内存，我们可以将相同类型的考试车进行合并

var candidateNum = 10; //考生数量
var examCarNum = 0; //驾考车的数量

function examCar(type) {
  examCarNum++;
  this.cardId = examCarNum;
  this.type = type;
}

examCar.prototype.exam = function (id) {
  console.log("考生" + id + "驾驶" + this.cardId + "进行" + this.type);
};

let autoCar = new examCar("自动挡");
let handCar = new examCar("手动挡");

for (let i = 0; i < candidateNum; i++) {
  let car = i % 2 === 0 ? autoCar : handCar;
  car.exam(i);
}

console.log("车子" + examCarNum);
