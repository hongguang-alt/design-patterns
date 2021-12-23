//demo 自己实现一个简单的迭代器

const myforEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myforEach = myforEach;

let arr = new Array(1, 2, 3);
arr.myforEach((item) => {
  console.log(item);
});
