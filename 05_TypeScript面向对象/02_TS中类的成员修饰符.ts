/*
public：在任何地方可见、公有的属性或方法，默认值
private：方法变成私有方法: 只有在类内部才能访问
protected： 仅在类自身及子类中可见
*/

class Person {
  protected name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  private eating() {
    console.log('吃东西', this.age, this.name)
  }
}

const p = new Person('why', 18)
// console.log(p.name, p.age)
// p.name = 'kobe'
// p.eating()

export {}
