"use strict";
let character;
let age;
let isLoggedIn;
age = 30;
character = "saya";
let ninjas = [];
ninjas = ["saya", "kamu"];
// union types
let mixed = [];
mixed.push("hello");
mixed.push(30);
// mixed.push(true)
let uid;
uid = "123";
uid = 123;
// object
let ninjaOne;
ninjaOne = { name: "saya", age: 30 };
ninjaOne = ["name", 30];
// explicit object
let ninjaTwo;
ninjaTwo = {
    name: "string",
    age: 3,
    belt: "string",
    login: true,
};
// any
let mixed2;
let mixed3;
// ============================ FUNCTION
let greet;
greet = () => {
    console.log("hello");
};
const add = (a, b = 10, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};
add(5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 4);
console.log(result);
