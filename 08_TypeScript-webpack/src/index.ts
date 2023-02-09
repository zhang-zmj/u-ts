import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import React from 'react'
import _ from 'lodash'
import kobeImage from './img/kobe02.png'
import App from './vue/App.vue'

/*
一、内置类型声明
  是typescript自带的、帮助我们内置了javascript运行的一些标准化API的声明文件
    * Function、String、Math、Date
    * DOM API 比如window、Document等
*/

// lib.dom.d.ts
const h2El = document.createElement('h2')
h2El.textContent = 'Hello TypeScript'
document.body.append(h2El)

// lib.es2015.d.ts
let message = 'Hello World'
const promise = new Promise((resolve, reject) => {})
console.log(message.startsWith('Hello'))

/*
二、外部定义类型声明 – 第三方库
  方式一：在自己库中进行类型声明（编写.d.ts文件），比如axios
  方式二：通过社区的一个公有库DefinitelyTyped存放类型声明文件
    * 该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=
    * npm i @types/react --save-dev
*/

/*
三、什么情况下需要自己来定义声明文件呢？
  情况一：我们使用的第三方库是一个纯的JavaScript库，没有对应的声明文件；比如lodash
  情况二：我们给自己的代码中声明一些类型，方便在其他地方直接进行使用；
*/
// lodash
console.log(_.join(['abc', 'cba']))

/*
四、给自己的代码添加类型声明文件
  1、平时使用的代码中用到的类型, 直接在当前位置进行定义或者
    在业务文件夹某一个位置编写一个类型文件即可
  2、全局的js代码
*/
// 1、
type IDType = number | string
interface IKun {
  name: string
  age: number
  slogan: string
}

const id1: IDType = 123

// 2、需要编写全局的类型声明：index.html
console.log(zmjName, zmjAge, zmjHeight)

const p = new Person('kobe', 30)
console.log(p.name, p.age)

// 图片文件的使用
const imgEl = document.createElement('img')
imgEl.src = kobeImage
document.body.append(imgEl)

/*
五、通过CDN进行引入第三方库
*/
// jquery
$.ajax({
  url: 'http://codercba.com:8000/home/multidata',
  success: function (res: any) {
    console.log(res)
  }
})
