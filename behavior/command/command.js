/**
 * 1.命令的发送者和接受者解耦，发送者与接受者之间没有直接引用关系，发送请求的对象只需要知道如何发送请求，而不必知道如何完成请求
 * 2.对命令还可以进行撤销、排队等操作，比如用户等太久不想等了撤销订单，厨师不够了将订单进行排队，等等操作
 */

//马里奥的demo工程
class Role {
  constructor({ x = 0, y = 0, step = 10 } = {}) {
    let parent = document.getElementById("demo");
    let img = document.createElement("img");
    img.src = "http://pic.616pic.com/ys_img/00/17/21/nPgyRoKbUc.jpg";
    img.style.width = "50px";
    img.style.height = "50px";
    parent.appendChild(img);
    this.receiver = img;
    this.x = x;
    this.y = y;
    this.step = step;
  }
  move(x, y) {
    if (this.x + x > 400 || this.y + y > 400) {
      return;
    }
    if (this.x + x < 0 || this.y + y < 0) {
      return;
    }
    this.x = this.x + x;
    this.y = this.y + y;
    this.receiver.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
  left() {
    this.move(-this.step, 0);
  }
  right() {
    this.move(this.step, 0);
  }
  top() {
    this.move(0, -this.step);
  }
  bottom() {
    this.move(0, this.step);
  }
}

class Command {
  constructor(receiver, tag) {
    this.receiver = receiver;
    this.tag = tag;
    switch (this.tag) {
      case "left":
        this.reverseTag = "right";
        break;
      case "right":
        this.reverseTag = "left";
        break;
      case "top":
        this.reverseTag = "bottom";
        break;
      case "bottom":
        this.reverseTag = "top";
        break;
    }
  }
  execute() {
    this.receiver[this.tag]();
  }
  undo() {
    this.receiver[this.reverseTag]();
  }
}

class CommandManage {
  static undoStack = [];
  static redoStack = [];
  static setComment(id, command) {
    let dom = document.getElementById(id);
    //撤销
    if (command.tag === "undo") {
      dom.onclick = () => {
        if (this.undoStack.length === 0) return;
        let cb = this.undoStack.pop();
        cb.undo();
        this.redoStack.push(cb);
      };
      return;
    }
    //重做
    if (command.tag === "redo") {
      dom.onclick = () => {
        if (this.redoStack.length === 0) return;
        let cb = this.redoStack.pop();
        cb.execute();
        this.undoStack.push(cb);
      };
      return;
    }
    dom.onclick = () => {
      command.execute();
      this.undoStack.push(command);
    };
  }
}

let mario = new Role();
CommandManage.setComment("left", new Command(mario, "left"));
CommandManage.setComment("right", new Command(mario, "right"));
CommandManage.setComment("up", new Command(mario, "top"));
CommandManage.setComment("down", new Command(mario, "bottom"));

CommandManage.setComment("undo", new Command(mario, "undo"));
CommandManage.setComment("redo", new Command(mario, "redo"));
