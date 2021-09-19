/***
 * 代理模式
 * 代理模式把代理对象插入到访问者和目标对象之间，
 * 从而为访问者对目标对象的访问引入一定的间接性。
 * 正是这种间接性，给了代理对象很多操作空间，
 * 比如在调用目标对象前和调用后进行一些预操作和后操作，
 * 从而实现新的功能或者扩展目标的功能。
 */

//ES6 使用proxy
const SuperStar = {
  name: "小鲜肉",
  hasTime: false,
  playAdvertisement(ad) {
    console.log(`I am ${this.name},I say ${ad}`);
  },
};

const ProxyAssistant = {
  name: "经纪人",
  scheduleTime(ad) {
    let proxy = new Proxy(SuperStar, {
      set(obj, prop, val) {
        if (prop !== "hasTime") return;
        if (val) {
          obj.hasTime = true;
          obj.playAdvertisement(ad);
        }
      },
    });
    setTimeout(() => {
      console.log("小鲜鲜有空了");
      proxy.hasTime = true;
    }, 2000);
  },
  playAdvertisement(reward, ad) {
    if (reward > 10000) {
      console.log("安排上~");
      this.scheduleTime(ad);
    } else {
      console.log("没有档期~");
    }
  },
};

ProxyAssistant.playAdvertisement(100, "蒙牛好味道");
ProxyAssistant.playAdvertisement(100000, "旺仔真好喝");

//ES5 使用 Object.defineProperty

const SuperStar = {
  name: "小鲜肉",
  hasTime: false,
  playAdvertisement(ad) {
    console.log(`I am ${this.name},I say ${ad}`);
  },
};

const ProxyAssistant = {
  name: "经纪人",
  scheduleTime(ad) {
    Object.defineProperty(SuperStar, "hasSechedule", {
      get() {
        return SuperStar.hasSechedule;
      },
      set(val) {
        if (val === true && SuperStar.hasTime === false) {
          SuperStar.hasTime = true;
          SuperStar.playAdvertisement(ad);
        }
      },
    });
    setTimeout(() => {
      console.log("小鲜鲜有空了");
      SuperStar.hasSechedule = true;
    }, 2000);
  },
  playAdvertisement(reward, ad) {
    if (reward > 10000) {
      console.log("安排上~");
      this.scheduleTime(ad);
    } else {
      console.log("没有档期~");
    }
  },
};

ProxyAssistant.playAdvertisement(100, "蒙牛好味道~");
ProxyAssistant.playAdvertisement(100000, "旺仔真好喝~");
