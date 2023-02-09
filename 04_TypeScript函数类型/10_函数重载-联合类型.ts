// 1、普通函数重载
// function getLength(arg: string): number
// function getLength(arg: any[]): number
// function getLength(arg) {
//   return arg.length
// }

// 2、联合类型实现(可以使用联合类型实现的情况, 尽量使用联合类型)
function getUnionLength(arg: string | any[]) {
  return arg.length
}

// 3、对象类型实现
function getObjLength(arg: { length: number; name: string }) {
  return arg.length
}

console.log(getUnionLength('aaaaa'))
console.log(getUnionLength(['abc', 'cba', 'nba']))
console.log(getObjLength({ name: 'why', length: 100 }))

export {}
