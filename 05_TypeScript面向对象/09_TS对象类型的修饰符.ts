// 定义对象类型
type IPerson = {
  // 可选属性
  name?: string
  //只读属性
  readonly age: number
}

interface IKun {
  name?: string
  readonly slogan: string
}

const p: IPerson = {
  name: 'zhangmj',
  age: 18
}
