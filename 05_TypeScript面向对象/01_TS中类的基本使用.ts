class Person {
  // 成员属性： 声明成员属性，初始化必须赋值
  name: string
  age?: number
  height!: number
  score: number = 99

  constructor(name: string, age: number, height: number) {
    this.name = name
  }
}

// 实例对象： instance
const p1 = new Person('zhang', 18, 1.88)
const p2 = new Person('zhangmj', 30, 2.2)
console.log(p1.name, p2.age)

export {}
