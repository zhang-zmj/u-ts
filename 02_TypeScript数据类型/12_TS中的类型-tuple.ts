// 保存不同类型的信息
// 1、使用数组类型：最好存放不同数据类型，即使存放之后取值后也不知道对应的数据类型
const info1: any[] = ['zhangmj', 18, 1.88]
const value = info1[2]
console.log(value)

// 2、使用对象类型(最多)
const info2 = {
  name: 'zhangmj',
  age: 18,
  heigth: 1.88
}

// 3、使用元组类型：可以存放不同的数据类型，取出来之后有明确的类型
const info3: [string, number, number] = ['zhangmj', 18, 1.88]
const value2 = info3[2]

// 在函数中使用元组类型是最多的(函数的返回值)
function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState
  function setValue(newValue: number) {
    stateValue = newValue
    console.log('获取到的数据', stateValue)
  }

  return [stateValue, setValue]
}
const [count, setCount] = useState(10)
console.log(count)
setCount(100)

export {}
