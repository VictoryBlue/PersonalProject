let apples: number = 5;

// apples = "adsffa"
// apples = 123

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false];

//classes
class Car {}
let car1: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// 作为开发人员我们真正关心的是，传入函数的参数是什么类型，函数又返回什么了
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// 类型注释VS类型推断
let pears = 5; //我们没有给pears显式声明类型，但是由于第一个赋值是5

// const color = "red"
// const color 变量声明， “red”变量初始化，这是两个不同的过程
// 但是如果这两个过程在同一行发生，TS会为我们作变量推断
// 如果这两个过程不在同一行发生，那么变量推断不发生
let peach;
peach = 6;
// Note:何时使用类型推断和类型注释
// 总是使用类型推断

// 使用类型注释的情况：

// 1)函数返回了“any”type的时候
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
// const coordinates:{x:number, y:number} = JSON.parse(json);
console.log(coordinates);
// any类型意味着TS不知道变量有什么属性或者方法，因此无法对它作出检查
// coordinates.asdfsdaf，是不会报错的

// 2）先声明变量，之后被初始化的情况
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3）变量的类型不能被直接推断出来的时候
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}


