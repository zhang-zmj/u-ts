// TypeScript对于类型检测的时候使用的鸭子类型
// 鸭子类型: 如果一只鸟, 走起来像鸭子, 游起来像鸭子, 看起来像鸭子, 那么你可以认为它就是一只鸭子
// 鸭子类型, 只关心属性和行为, 不关心你具体是不是对应的类型

class Person {
  constructor(public name: string, public age: number) {}
  running() {}
}

class Dog {
  constructor(public name: string, public age: number) {}
  running() {}
}

function printPerson(p: Person) {
  console.log(p.name, p.age)
}
printPerson(new Person('zmj', 18))
printPerson({ name: 'zhangmj', age: 30, running: function () {} })
printPerson(new Dog('旺财', 3))

const person: Person = new Dog('果汁', 5)

export {}

// 没弄明白
