/**
 * 共同点：
 * 请求在一系列对象中传递，形成一条链
 * 链中的请求接受者对请求进行分析，要么处理这个请求，要么把这个请求传送给下一个请求接受者
 */

//demo 请假
class Leader {
  constructor() {
    this.nextLeader = null;
  }
  setNext(val) {
    this.nextLeader = val;
    return val;
  }
}

class GroupLeader extends Leader {
  handle(day) {
    if (day < 3) {
      console.log("小组长批准了");
    } else {
      this.nextLeader.handle(day);
    }
  }
}

class DepartmentLeader extends Leader {
  handle(day) {
    if (day < 5) {
      console.log("部门经理批准了");
    } else {
      this.nextLeader.handle(day);
    }
  }
}

class GeneralLeader extends Leader {
  handle(day) {
    if (day < 7) {
      console.log("总经理批准了");
    } else {
      console.log("总经理不批准，假期太长了");
    }
  }
}

let zhangsan = new GroupLeader();
let lisi = new DepartmentLeader();
let wangwu = new GeneralLeader();

zhangsan.setNext(lisi).setNext(wangwu);

zhangsan.handle(4);
