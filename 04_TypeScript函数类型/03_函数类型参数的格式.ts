// TypeScript对于传入的函数类型的多余(少)的参数会被忽略掉
type CalcType = (num1: number, num2: number) => number
function calc(calFn: CalcType) {
  let num = calFn(10, 20)
  console.log(num)
}
calc(function (num) {
  return 123
})

// forEach栗子:
const names = ['abc', 'cba', 'nba']
names.forEach(function (item) {
  console.log(item.length)
})

// TS对于很多类型的检测报不报错, 取决于它的内部规则
interface IPerson {
  name: string
  age: number
}

// typescript github issue, 成员
const p = {
  name: 'zhangmj',
  age: 18,
  height: 1.88,
  address: '广州市'
}

const info: IPerson = p

export {}
