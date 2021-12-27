/**
 * 特点：
 * 相亲各方/房源买家卖家（目标对象）之间的关系复杂，引入媒人/中介（中介者）会极大方便各方之间的沟通
 * 相亲各方/房源买家卖家（目标对象）之间如果有什么想法和要求上的变动，通过媒人/中介（中介者）就可以及时通知到相关各方，而目标对象之间相互不通信
 */

// demo媒婆相亲，感觉就是做了一个简单的筛选，对媒介所里的人进行过滤
const zhangsan = {
  name: "张三",
  sex: "男",
  age: 24,
  salary: 4000,
  height: 178,
  need: {
    sex: "女",
    age: [0, 30],
    salary: [2000, 8000],
    height: [155, 175],
  },
};
const lisi = {
  name: "李四",
  sex: "男",
  age: 26,
  salary: 4000,
  height: 170,
  need: {
    sex: "女",
    age: [0, 30],
    salary: [2000, 5000],
    height: [155, 165],
  },
};
const wangwu = {
  name: "王五",
  sex: "男",
  age: 28,
  salary: 10000,
  height: 171,
  need: {
    sex: "女",
    age: [0, 30],
    salary: [2000, 5000],
    height: [155, 165],
  },
};

let xiaofang = {
  name: "小芳",
  sex: "女",
  age: 25,
  salary: 6000,
  height: 165,
  need: {
    sex: "男",
    age: [0, 28],
    salary: [2000, 8000],
    height: [170, 180],
  },
};

let xiaohong = {
  name: "小红",
  sex: "女",
  age: 22,
  salary: 4000,
  height: 165,
  need: {
    sex: "男",
    age: [0, 30],
    salary: [5000, 7000],
    height: [170, 180],
  },
};

class MatchMaker {
  constructor() {
    this.personList = [];
  }
  registPersons(person) {
    this.personList.push(person);
  }
  choseOne(person) {
    let res = [];
    this.personList.forEach((item) => {
      const need = person.need;
      let needList = Object.keys(need);
      let result = needList.every((con) => {
        return (
          (con === "sex" && need[con] === item.sex) ||
          (need[con][0] <= item[con] && need[con][1] >= item[con])
        );
      });
      if (result) {
        res.push(item);
      }
    });
    // console.log(person.name + "中意" + res.map((item) => item.name).join(""));
    let names = res.map((item) => item.name).join(",");
    return person.name + (names ? "中意" + names : "没有中意的");
  }
}

let match = new MatchMaker();
match.registPersons(zhangsan);
match.registPersons(lisi);
match.registPersons(wangwu);
match.registPersons(xiaofang);
match.registPersons(xiaohong);

console.log(match.choseOne(zhangsan));
console.log(match.choseOne(lisi));
console.log(match.choseOne(wangwu));
console.log(match.choseOne(xiaofang));
console.log(match.choseOne(xiaohong));
