// 数组中所有元素的类型必须一致
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
let carsByJake: string[][];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers[0];

// prevent incompatibale values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), '2020']; // 管道操作符 日期/string
const importantDatesExample: (string | Date)[] = ['2021'];
importantDatesExample.push(new Date());
