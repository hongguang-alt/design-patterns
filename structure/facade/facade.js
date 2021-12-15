/**
 * 外观模式让外界减少与子系统内多个模块的直接交互
 * 让外界可以更轻松的使用子系统
 * 本质是封装交互，简化调用
 */

/**
 * 外观模式一般是作为子系统的功能出口出现，使用的时候可以在其中增加新的功能
 * 但是不建议这样做，因为外观应该是对已有功能的包装，不应在其中掺杂新的功能
 */

//主要用于函数的重载
var uav = {
  /* 电子调速器 */
  diantiao1: {
    up() {
      console.log("电调1发送指令：电机1增大转速");
      uav.dianji1.up();
    },
    down() {
      console.log("电调1发送指令：电机1减小转速");
      uav.dianji1.up();
    },
  },
  diantiao2: {
    up() {
      console.log("电调2发送指令：电机2增大转速");
      uav.dianji2.up();
    },
    down() {
      console.log("电调2发送指令：电机2减小转速");
      uav.dianji2.down();
    },
  },
  diantiao3: {
    up() {
      console.log("电调3发送指令：电机3增大转速");
      uav.dianji3.up();
    },
    down() {
      console.log("电调3发送指令：电机3减小转速");
      uav.dianji3.down();
    },
  },
  diantiao4: {
    up() {
      console.log("电调4发送指令：电机4增大转速");
      uav.dianji4.up();
    },
    down() {
      console.log("电调4发送指令：电机4减小转速");
      uav.dianji4.down();
    },
  },

  /* 电机 */
  dianji1: {
    up() {
      console.log("电机1增大转速");
    },
    down() {
      console.log("电机1减小转速");
    },
  },
  dianji2: {
    up() {
      console.log("电机2增大转速");
    },
    down() {
      console.log("电机2减小转速");
    },
  },
  dianji3: {
    up() {
      console.log("电机3增大转速");
    },
    down() {
      console.log("电机3减小转速");
    },
  },
  dianji4: {
    up() {
      console.log("电机4增大转速");
    },
    down() {
      console.log("电机4减小转速");
    },
  },

  /* 遥控器 */
  controller: {
    /* 上升 */
    up() {
      uav.diantiao1.up();
      uav.diantiao2.up();
      uav.diantiao3.up();
      uav.diantiao4.up();
    },

    /* 前进 */
    forward() {
      uav.diantiao1.down();
      uav.diantiao2.down();
      uav.diantiao3.up();
      uav.diantiao4.up();
    },

    /* 下降 */
    down() {
      uav.diantiao1.down();
      uav.diantiao2.down();
      uav.diantiao3.down();
      uav.diantiao4.down();
    },

    /* 左转 */
    left() {
      uav.diantiao1.up();
      uav.diantiao2.down();
      uav.diantiao3.up();
      uav.diantiao4.down();
    },
  },
};

/* 操纵无人机 */
uav.controller.down(); // 发送下降指令
uav.controller.left(); // 发送左转指令
