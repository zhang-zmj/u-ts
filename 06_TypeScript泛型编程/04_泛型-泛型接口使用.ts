interface IKun<Type = string> {
  name: Type
  age: number
  slogan: Type
}

const kunkun: IKun<string> = {
  name: 'zhangmj',
  age: 18,
  slogan: '哈哈哈哈'
}

const ikun1: IKun<number> = {
  name: 123,
  age: 20,
  slogan: 666
}

const ikun2: IKun = {
  name: 'kobe',
  age: 30,
  slogan: '张明军'
}

export {}
