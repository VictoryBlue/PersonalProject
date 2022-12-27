// Note: 函数的类型注释和函数的类型推断
// 类型注释：自己写代码告知ts参数类型和返回类型
// 类型推断：ts尝试了解函数返回的值
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(forecast);
