'use strict';
//JS内置类型分为两种：基本类型和对象。
// 基本类型7种：number string undefined boolean null Symbol bigint
// 对象Object:自定义的Object，数组对象Array，正则对象RegExp，日期对象Date，函数对象Function，数学函数Math

// number and bigint
// JS中所有数字都以双精度64位浮点格式表示，也就是说JS中的number没有办法表示很大的整数【范围：-9007199254740991(-(2^53-1))和9007199254740991（(2^53-1)）】超出这个范围的数字可能失去精度。

// 精度丢失case1:
console.log(99999999999999999999); //100000000000000000000多出一位
// 精度丢失case2:
// 计算机以二进制的方式存储数据，0.1，0.2转为二进制是无限循环的，一句双精度64位浮点格式表示会丢失精度，相加之后精度再一步丢失，转为10进制后就成了你看到的样子。
console.log(0.1 + 0.2); //0.30000000000000004

// 当数字的范围超过number可以表示的范围的时候可以使用bigint，在数字后面加n就好
console.log(99999999999999999999n); //99999999999999999999n
// bigint 的运算法则和number几乎一致，我所知的唯一不同在于除法,以及bigint与number的运算不能混用，也就是说bigint不能转换为number
// bigint不能传给内置的js函数：Math.abs() etc
console.log('22n/10n===2n:', 22n / 10n === 2n); //true
console.log('22/10===2:', 22 / 10 === 2); //false

// Undefined类型只有一个值就是undefine,什么情况下会出现undefined：
// 1. let声明变量但是没有初始化
// 2. 调用函数时，应该提供的参数没有提供，JS不会报错，只是把他们赋值为undefined
// 3. 函数没有返回值的时候会返回undefined,browser的console中用⬅️箭头指示

console.log(typeof 2);
console.log(typeof 'string');
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof null); // object
console.log(typeof {}); //object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// typeof 无法区分 {} [] null --> 都返回Object,以及null不是一个对象，typeof null 为 object 是一个bug

console.log(2 instanceof Number); //false
console.log('string' instanceof String); //false
console.log(true instanceof Boolean); //false
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true

// a instanceof b 可以区分b有没有在a的原型链上
// instanceof对基本类型无效,均返回false

// typeof vs instanceof
// typeof对于基本类型，除了null都可以正确显示类型；对引用类型，除了function，都显示object。
// instanceof可以用来判断对象类型。
