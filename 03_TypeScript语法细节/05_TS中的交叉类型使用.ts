// 交叉类型: 两种(多种)类型要同时满足
type NewType = number & string // 没有意义

interface IKun {
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}

type infoType = IKun & ICoder

const info: infoType = {
  name: 'zhangmj',
  age: 18,
  coding: function () {
    console.log('coding')
  }
}
