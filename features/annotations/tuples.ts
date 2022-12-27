const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi = ['brown', true, 40];
pepsi[0] = 40;
// 数组的方式，交换元素顺序，只要元素类型符合要求即可。

// tuple，元素类型的排列顺序也被限定。我个人认为是一种特殊的数组
type Drink = [string, boolean, number];

const pepsi2: [string, boolean, number] = ['brown', false, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
