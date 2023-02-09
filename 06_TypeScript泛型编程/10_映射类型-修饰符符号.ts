/*
  1、- 属性：将输入类型中的 readonly 删除掉
  2、- 属性：将输入类型中的可选修饰符删除掉
*/
type MapPerson<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property]
}

interface IPerson {
  name: string
  age?: number
  readonly height: number
  address?: string
}

type IPersonRequired = MapPerson<IPerson>

const p: IPersonRequired = {
  name: 'zhangmj',
  age: 18,
  height: 1.88,
  address: '杭州市'
}

export {}
