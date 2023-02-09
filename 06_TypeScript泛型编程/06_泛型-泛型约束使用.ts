interface ILength {
  length: number
}

// 1、getLength没有必要使用泛型
function getLength(arg: ILength) {
  return arg.length
}

const length1 = getLength('aaaa')
const length2 = getLength(['aaaa', 'bbbb', 'cccc'])
const length3 = getLength({ length: 100 })

// 2、获取传入的内容, 这个内容必须有length属性
// Type相当于一个变量，用于记录本次调用的类型，所以在整个函数的执行周期中，一直保留这参数类型
function getInfo<Type extends ILength>(args: Type): Type {
  return args
}

const info1 = getInfo('aaaa')
const info2 = getInfo(['aaaa', 'bbbb', 'cccc'])
const info3 = getInfo({ length: 100 })

// console.log(getInfo(12345))
// console.log(getInfo({}))

export {}
