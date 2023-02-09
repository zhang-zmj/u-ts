function foo(...args: (string | number)[]) {
  return args.join('+')
}

console.log(foo('abc', 111, 'cba'))

console.log(foo(123, 321))

export {}
