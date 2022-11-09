let character: string
let age: number
let isLoggedIn: boolean

age = 30
character = "saya"

let ninjas: string[] = []

ninjas = ["saya", "kamu"]

// union types
let mixed: (string | number)[] = []
mixed.push("hello")
mixed.push(30)
// mixed.push(true)

let uid: string | number
uid = "123"
uid = 123

// object
let ninjaOne: object
ninjaOne = { name: "saya", age: 30 }
ninjaOne = ["name", 30]

// explicit object
let ninjaTwo: {
  name: string
  age: number
  belt: string
  login: boolean
}

ninjaTwo = {
  name: "string",
  age: 3,
  belt: "string",
  login: true,
}

// any

let mixed2: any[]
let mixed3: {
  name: any
  age: any
  login: any
}

//# ============================ FUNCTION

let greet: Function

greet = () => {
  console.log("hello")
}

const add = (a: number, b: number | string = 10, c?: number) => {
  console.log(a)
  console.log(b)
  console.log(c)
}

// add(5)

const minus = (a: number, b: number): number => {
  return a - b
}

let result = minus(10, 4)
// console.log(result)

//# =================================================

type StringOrNum = string | number
type objWithName = {
  name: string
  uid: StringOrNum
}

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`)
}

// logDetails("asdf78623", "new item")

const greetA = (user: objWithName) => {
  console.log(`${user.name} says hello`)
}

const greetB = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} says hello`)
}

//# =================================================

let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}

let logD: (obj: { name: string; age: number }) => void

type person = {
  name: string
  age: number
}
logD = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`)
}

logD({ name: "bagus", age: 30 })

//# =================================================
