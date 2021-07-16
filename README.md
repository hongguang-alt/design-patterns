### 设计模式

#### 先序

- [柯里化](https://github.com/hongguang-alt/design-patterns/blob/master/perface/curry.js)
  - 参数复用
  - 提前计算
  - 延迟计算/运行
- [反柯里化](https://github.com/hongguang-alt/design-patterns/blob/master/perface/anti-curry.js)
- [偏函数](https://github.com/hongguang-alt/design-patterns/blob/master/perface/partial.js)

柯里化和反柯里化的区别：

1.柯里化是在运算前提前传参，可以传递多个参数。

2.反柯里化是延迟传参，在运算时就把已经固定的参数或者 this 上下文等作为参数延迟到未来传递。

偏函数和柯里化的区别：

1.柯里化是一个接受 n 个参数的函数，由原本的一次性传递所有参数并执行成为了可多次接受参数再执行

```javascript
    add = (x,y,x) => x + y + z -> currAdd = x=>y=>z=>x+y+z
```

2.偏函数固定了函数的某个部分，通过传入的参数或者额方法返回一个新的函数来接受剩余的参数，数量可能是一个也可能是多个。

当一个柯里化函数只接受两次参数时，比如 curry()()，这时候的柯里化函数和偏函数概念类似，可以认为偏函数是柯里化函数的退化版
