const name = 'zhangmj'

console.log('zmj')
console.log(name)

type PointType1 = {
  x: number
  y: number
  z: number
}

/*
接口： interface
  * 定义的变量比接口少了一些属性是不允许的
  * 多一些属性也是不允许的， 不允许添加未定义的属性
  * 设置可选属性
*/
interface PointType2 {
  x: number
  y: number
  z?: number
}

function printCoordinate(point: PointType2) {}

export {}
