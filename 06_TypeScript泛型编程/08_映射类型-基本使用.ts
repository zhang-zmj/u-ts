/*
  TypeScript提供了映射类型： 函数
    * 映射类型不能使用interface定义
    * Type = IPerson
    * keyof = "name" | "age"
*/

type MapPerson<Type> = {
  // 索引类型依次进行使用
  [property in keyof Type]: Type[property]
}

interface IPerson {
  name: string
  age: number
}

type NewPerson = MapPerson<IPerson>

export {}
