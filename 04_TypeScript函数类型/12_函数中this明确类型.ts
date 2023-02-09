// tsc -init 配置文件
// 在配置选项(编译选项compilerOptions，noImplicitThis设置为true，不允许模糊的this存在)

// 1、对象中的函数中的this -- 可推导的this类型
const obj = {
  name: 'why',
  studying: function () {
    // 默认情况下, this是any类型
    console.log(this, 'studying')
  }
}

// obj.studying()
obj.studying.call({})

// 2、普通的函数
function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info)
}
foo.call({ name: 'zhangmj' }, { name: 'kobe' })

export {}
