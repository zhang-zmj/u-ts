abstract class Shape {
  // getArea方法只有声明没有实现体, 只能让子类自己实现
  // 抽象前面需要加abstract 抽象方法：在方法前面加abstract，
  abstract getArea(): any
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return this.radius * 2 * Math.PI
  }
}

class Triangle extends Shape {
  getArea() {
    return 100
  }
}

// 通用函数
function calcArea(shape: Shape) {
  return shape.getArea()
}

console.log(calcArea(new Rectangle(10, 20)))
console.log(calcArea(new Circle(5)))
console.log(calcArea(new Triangle()))

// export {}
