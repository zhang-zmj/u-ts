class Person {
  // 语法糖
  constructor(public name: string, private _age: number, readonly height: number) {}

  running() {
    console.log(this._age, 'eating')
  }
}

const p = new Person('zhangmj', 18, 1.75)
console.log(p.name, p.height)

export {}
