/**
 * 特点：
 * 1.结构呈整体-部分的树型关系，整体部分一般称为组合对象，组合对象下面还有组合对象和叶对象。
 * 2.组合对象和叶对象有一致的接口和数据结构，以保证操作一致。
 * 3.请求从树的最顶端往下传递，如果当前处理请求的对象是叶对象，叶对象自身会对请求作出相应的处理；
 *   如果当前处理的是组合对象，则遍历其下的子节点（叶对象），将请求继续传递给这些子节点；
 */

/**
 * Demo:
 * 在本地一个「电影」文件夹下有两个子文件夹「漫威英雄电影」和「DC英雄电影」，
 * 分别各自有一些电影文件，我们要做的就是在这个电影文件夹里找大于 2G 的电影文件，
 * 无论是在这个文件夹下还是在子文件夹下，并输出它的文件名和文件大小。
 */

class Folder {
  constructor(name) {
    this.children = [];
    this.name = name;
  }
  //添加文件
  add(child) {
    this.children.push(child);
    return this;
  }
  //扫描文件
  scan(cb) {
    this.children.forEach((item) => {
      item.scan(cb);
    });
  }
}

class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  add() {
    throw new Error("文件不能添加文件");
  }
  scan(cb) {
    cb(this);
  }
}

new Folder("漫威英雄电影")
  .add(new File("钢铁侠.mp4", 1.2))
  .add(new File("美国队长.mp4", 1.4))
  .add(new File("黑寡妇", 4))
  .scan((item) => {
    console.log(item.name, item.size);
  });

new Folder("DC英雄电影")
  .add(new File("超人.mp4", 1.2))
  .add(new File("闪电侠.mp4", 1.4))
  .add(new File("蝙蝠侠", 4))
  .scan((item) => {
    console.log(item.name, item.size);
  });
