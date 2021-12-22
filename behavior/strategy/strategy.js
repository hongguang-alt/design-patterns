/**
 * 特点：
 * 螺丝刀头/轮胎（策略）之间相互独立，又可以相互替换
 * 螺丝刀和车（封装上下文）可以根据需要的不同选取不同的策略
 */

//Demo场景，不同的商品享受不同的优惠政策
//满100减30 满200减80 打八折

/**
 * 可以使用if-else实现
 * 缺点：
 * 1.if-else会变得臃肿
 * 2.新的变化，要修改这个函数
 * 3.可用性差，别的地方如果用到这个方法，规则不一样，那么就不能够复用
 */

const disCountWays = {
  full100_30: (val) => {
    return val - Math.floor(val / 100) * 30;
  },
  full200_80: (val) => {
    return val - Math.floor(val / 200) * 80;
  },
  eightOff: (val) => {
    return val * 0.8;
  },
};

const getNum = (type, val) => {
  return disCountWays[type](val);
};

console.log(getNum("full100_30", 178));
console.log(getNum("full200_80", 178));
console.log(getNum("eightOff", 178));
