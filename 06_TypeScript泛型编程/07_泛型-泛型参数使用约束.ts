// 传入的key类型，obj当中key的其中之一
interface IKun {
  name: string
  age: number
}

//  keyof操作符，是将一个类型映射为它所有成员名称的联合类型
type IKunKeys = keyof IKun // "name"|"age"

function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const info = {
  name: 'zhangmj',
  age: 18,
  height: 1.88
}

const name = getObjectProperty(info, 'name')

export {}
