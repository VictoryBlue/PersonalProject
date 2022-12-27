// 给定了类型，悬浮today将指定today的类型，具有Date的属性和方法
const today = new Date();
today.getMonth();
// today. 给出方法提示

// 没有指定类型时鼠标悬浮person，ts将给定变量的类型和方法
const person = {
  age: 20,
};

class Color {}
const red = new Color();
// red. 不会给出任何提示
