// 在定义一个TypeScript中的函数时, 都要明确的指定参数的类型
function sum1(num1: number, num2: number) {
  return num1 + num2
}

const res1 = sum1(123, 321)
console.log('--1111--参数类型--', res1)

// 返回值类型可以明确的指定, 也可以自动进行类型推导
function sum2(num1: number, num2: number): number {
  return num1 + num2
}

const res2 = sum2(123, 321)
console.log('--2222--参数类型--', res2)

export {}
