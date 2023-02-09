
/*
  // 1、索引签名的理解
  interface InfoType {
    // 索引签名：可以通过字符串索引，去获取到一个值，也是字符串
    [key: string]: string
  }

  function getInfo(): InfoType {
    const abc: any = 'hahah'
    return abc
  }
  const info = getInfo()
  const nameStr = info['name']
  console.log(nameStr, info.age, info.address)

*/

// 2、索引签名的案例
interface ICollection {
  [index: number]: string
  length: number
}

function printCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i]
    console.log(element.length)
  }
}
const array = ['abc', 'cba', 'nba']
const tuple: [string, string] = ['zhangmj', '杭州']
printCollection(array)
printCollection(tuple)

export {}
