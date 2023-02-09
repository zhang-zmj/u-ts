const names: string[] = ['abc', 'cba', 'nba']

// 匿名函数是否需要添加类型注解呢? 最好不要添加类型注解
// TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型
// 这个过程称之为上下文类型（contextual typing），因为函数执行的上下文可以帮助确定参数和返回值的类型
names.forEach(function (item, index, arr) {
  console.log(item, index, arr)
})

export {}
