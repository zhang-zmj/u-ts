function printID(id: number | string) {
  console.log('您的ID：', id)
  // 类型缩小
  if (typeof id === 'string') {
    console.log(id.length)
  } else {
    console.log(id)
  }
}

printID('abc')
printID(123)
export {}
