//  Typescript 提供了一些工具类型来辅助进行常见的类型转换，这些类型全局可用。

function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info)
}

type FooType = typeof foo

// 1、ThisParameterType：获取FooType类型中this的类型，没有this参数返回unknown
type FooThisType = ThisParameterType<FooType>

// 2、OmitOmitThisParameter: 删除this参数类型, 并返回当前的函数类型
type PuerFooType = OmitThisParameter<FooType>

// 3、这个类型不返回一个转换过的类型，它被用作标记一个上下文的this类型。
interface IState {
  name: string
  age: number
}

interface IStore {
  state: IState
  eating: () => void
  running: () => void
}

// ThisType：给所有成员绑定一个上下文 this
const stroe: IStore & ThisType<IState> = {
  state: {
    name: 'zhangmj',
    age: 18
  },
  eating: function () {
    console.log(this.name)
  },
  running: function () {
    console.log(this.name)
  }
}

stroe.eating.call(stroe.state)

export {}
