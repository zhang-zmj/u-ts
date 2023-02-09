// 那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型；

//封装框架/工具库的时候可以使用一下never
//其他时候在扩展工具的时候, 对于一些没有处理的case, 可以直接报错

function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log(message.length)
      break
    case 'number':
      console.log(message)
      break
    case 'boolean':
      console.log(Number(message))
      break
    default:
      const check: never = message
  }
}

handleMessage('aaaa')
handleMessage(1234)

// 另外同事调用这个函数
handleMessage(true)

export {}
