let input = [
  {
    id: 1,
    val: "学校",
    parentId: null,
  },
  {
    id: 2,
    val: "班级1",
    parentId: 1,
  },
  {
    id: 3,
    val: "班级2",
    parentId: 1,
  },
  {
    id: 4,
    val: "学生1",
    parentId: 2,
  },
  {
    id: 5,
    val: "学生2",
    parentId: 3,
  },
  {
    id: 6,
    val: "学生3",
    parentId: 3,
  },
  {
    id: 7,
    val: "宠物1",
    parentId: 5
  }
];
// buildTree的思路
// 如何构造一颗树呢，就是已知parentID，和parent的children的地址，然后找到array里这个parent的child，然后递归的对child build tree
function buildTree(arr, parentId, parentChildren){
  arr.forEach((item,i)=>{
    const child = []
    if (item.parentId===parentId){
      // 以下两步把item的child挂在item上
      item.children = child
      buildTree(arr, item.id, child)
      // 把item挂在parentChildren里
      parentChildren.push(item)
    }
  })

}
function test(){
  const res = []
  buildTree(input, null, res)
  console.log(res)
}
test()