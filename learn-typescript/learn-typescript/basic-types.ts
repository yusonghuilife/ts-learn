let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0o1111 || 0b111

let firstName: string = "viking"
let message: string = `Hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

let num: number = undefined // undefined null 为所有类型子类型

let notSure: any = 4
notSure = "maybe it is a string"
notSure = true

notSure.myName
notSure.getName()

let numberOrString: number | string = 234
numberOrString = "abc"

let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

let user: [string, number] = ["viking", 1] // tuple元组
