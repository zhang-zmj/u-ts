import { sum } from './utils/math'
// 导入的是类型, 推荐在类型的前面加上type关键
// import { type IDType, type IPerson } from './utils/type'
import type { IDType, IPerson } from './utils/type'

import { price, date } from './utils/format'

// 1、导出
console.log(sum(20, 30))

//类型使用
const id1: IDType = 111
const p: IPerson = { name: 'zhangmj', age: 18 }

// 使用命名空间
console.log(price.fromat('11111'))
console.log(date.format('22222'))

/*
.d.ts文件： 
    文件中声明的变量或者模块，在其他文件中不需要使用import导入，可以直接使用  
declare：
    告诉TS编译器你担保这些变量和模块存在，并声明了相应类型，编译的时候不需要提示错误！

那么typescript会在哪里查找我们的类型声明呢？
    * 内置类型声明；
    * 外部定义类型声明；
    * 自己定义类型声明；
*/
