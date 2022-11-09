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
