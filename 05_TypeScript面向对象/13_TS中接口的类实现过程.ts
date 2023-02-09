interface IKun {
  name: string
  age: number
  slogan: string

  playBasketball: () => void
}

interface IRun {
  running: () => void
}

const ikun: IKun = {
  name: 'zmj',
  age: 18,
  slogan: '张明军',
  playBasketball: function () {}
}

// 作用：接口被类实现
class Person implements IKun, IRun {
  name: string
  age: number
  slogan: string
  playBasketball() {}
  running() {}
}

const ikun1 = new Person()
const iKun2 = new Person()
const iKun3 = new Person()

console.log(ikun1.name, iKun2.age, iKun3.slogan)
ikun1.playBasketball()
ikun1.running()
