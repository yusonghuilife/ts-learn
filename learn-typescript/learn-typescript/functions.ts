/*
 * @Date: 2020-02-21 18:02:26
 * @LastEditors: yusonghu
 * @LastEditTime: 2020-06-01 20:50:59
 * @FilePath: /learn-typescript/learn-typescript/functions.ts
 */

// 函数声明
// function add(x: number, y: number, z: number = 10): number {
//   if (typeof z === 'number') {
//     return x + y + z
//   } else {
//     return x + y
//   }
// }

// let result = add(2, 3, 5)

const add = function (x: number, y: number, z: number = 10): number {
  if (typeof z === "number") {
    return x + y + z
  } else {
    return x + y
  }
}

const add2: (x: number, y: number, z?: number) => number = (x, y, z) => {
  if (typeof z === "number") {
    return x + y + z
  } else {
    return x + y
  }
}
