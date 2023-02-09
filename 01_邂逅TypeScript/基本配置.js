/*
TypeScript的编译环境
  1、安装命令：npm install typescript -g
  2、查看版本：tsc --version

TypeScript的运行环境

  一、查看TypeScript代码的运行效果
      * 通过tsc编译TypeScript到JavaScript代码
      * 在浏览器或者Node环境下运行JavaScript代码；

  二、没有有可以直接运行在浏览器上或者通过node的命令来执行
      1、 配置webpack搭建一个本地服务器，可以直接运行在浏览器上
          https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw；

      2、 通过ts-node库，为TypeScript的运行提供执行环境
        * 安装ts-node： 
            npm install ts-node -g 
        * 另外ts-node需要依赖 tslib 和 @types/node 两个包
            npm install tslib @types/node -g
        * 通过 ts-node 来运行TypeScript的代码
            ts-node math.ts

*/



