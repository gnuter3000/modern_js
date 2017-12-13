// ######################
/* // log to console 
// ######################
console.log('heloo world')
console.log('123')
console.log('true')

var greeting='Hello'
console.log(greeting)
console.log([1,2,3,4])
console.log({a:1, b:2})
console.table({a:1, b:2})

console.error('this is some error')
console.clear()

console.warn('this is a warning')

console.time('Hello')
console.log('ab')
console.timeEnd('TimeEnd')

// ######################
// variables, let, const
// ######################
var a = 'lalala'
console.log(a)
a = 'lololo'
console.log(a)

// init a variable
var greeting
console.log(greeting)
greeting = 'Hello'
console.log(greeting)

// letters, numbers, _ ,$
// cannot start with a number
var $name='1'
// var 1name='1' //error
var _name='1'
var name='1'

//mutliword variable
var firstName = 'John' //Camel case
var first_Name = 'John' //Underscore
var FirstName = 'John' //Pascal case

//LET
let name
let a = 'lalala'
console.log(a)
a = 'lololo'
console.log(a)

//Const
const name = 'John'
console.log(name)
//name = 'Sarah' //Error
// const name2 //you have to asign a value >> error

const person = {
  name: 'john',
  age: 30
}

console.log(person)

person.name='Sarah'
person.age=32
console.log(person)

const numbers = [1,2,3,4,5]
numbers.push(126)
console.log(numbers)

*/

// ######################
// datatypes: primitive vs reference type
// ######################

// primitive datatypes
// string
// const name = 'John Doe'
// console.log(typeof name)
// // number
// const age = 32
// console.log(typeof age)
// // boolean
// const hasKids = true
// console.log(typeof hasKids)
// // null
// const car = null
// console.log(typeof car) //is bug in console
// // undefined
// let test
// console.log(typeof test)
// // symbols(es6)
// const sym = Symbol()
// console.log(typeof sym)


// reference types
// arrays
// const hobbies = ['movies', 'music']
// console.log(typeof hobbies)
// object literals
// const address = {
//   city: 'boston',
//   state: 'MA'
// }
console.log(typeof address)
// functions
// dates
// const today= new Date()
// console.log(typeof today)
// anything else

