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
// console.log(typeof address)
// functions
// dates
// const today= new Date()
// console.log(typeof today)
// anything else

// ######################
// 008 - Type Conversion
// ######################

// // number to string
// val = String(555)
// val = String(4+4)

// //boolean to string
// val = String(true)

// //date to string
// val = String(new Date)

// //array to string

// val = String([1,2,3,4])

// //toString
// val = (5).toString()
// val = (true).toString()

// //strings to numbers
// val = Number('5')
// val = Number(true)
// val = Number(false)
// val = Number(null)
// val = Number('hello') //NaN = not a number
// val = Number([1,2,3,4,5]) //NaN = not a number
// val = parseInt('100.30') //Ergebnis: 100!
// val = parseFloat('100.3') //Ergebnis: 100.30!

// // 

// console.log(val)
// console.log(typeof val)
// // console.log(val.length)
// console.log(val.toFixed(2))


// const val1 = '5'
// const val2 = String(6)
// const sum = val1 + val2
// console.log(sum)
// console.log(typeof sum)


// ###############################
// 009 - Numbers & The Math Object
// ###############################
// const num1=100
// const num2=50
// let val

// simple math with numbers
// val = num1 + num2
// val = num1 * num2
// val = num1 - num2
// val = num1 / num2
// val = num1 % num2

// Math Object
// val = Math.PI
// val = Math.E
// val = Math.round(val)
// val = Math.ceil(val)
// val = Math.floor(val)
// val = Math.sqrt(val)
// val = Math.abs(-3)
// val = Math.pow(8 ,2)
// val = Math.min(8 ,2, 11, -3)
// val = Math.max(8 ,2, 11, -3)
// val = Math.random()
// val = Math.floor(Math.random() * 20 +1)

// console.log(val)

// ####################################
// 010 - String Methods & Concatenation
// ####################################

// const firstName = 'William'
// const lastName = 'Johnson'
// const age = '36'
// const str = "Hello my Name is Hannibal Smith"
// const tags = 'web design, web development'
// let val 

// Concatenation
// val = firstName + ' ' + lastName

// Appending
// val = 'Brad '
// val = val + 'Traversy'
// val = 'Hello my Name is ' + firstName + ' and I am ' + age;

// Escaping
// val = "That's awesome, I can't wait"
// val = 'That\'s awesome, I can\'t wait'

// Length
// val = firstName.length

// Concat
// val = firstName.concat(' ', lastName)

// ToUpperCase
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()
// val = firstName[2] //Ergebnis L (von William)

// indexOf()
// val = firstName.indexOf('l') //Ergebis 2 >> an welcher Stelle in firstName  steht ein l
// val = firstName.lastIndexOf('l') //Ergebis 3 >> an welcher Stelle in firstName  steht ein l von hinten

// charAt()
// val = firstName.charAt('5') //Ergebnis 5

// get last Charakter
// val = firstName.charAt(firstName.length-1) //Ergebnis letzter Buchstabe

// substrings
// val = firstName.substring(0,4)

// slice
// val = firstName.slice(0,4) //similar to substring
// val = firstName.slice(-3) 

// split
// val = str.split(' ')
// val = tags.split(',')

// replace
// val = str.replace('Hannibal', 'Jack')

// includes()
// val = str.includes('Hello') //Ergbnis: true weil Hello in str enthalten ist
// val = str.includes('foo') //Ergbnis: false weil foo nicht in str enthalten ist

// console.log(val)

//######################## 
// 011 - Template Literals
//######################## 

// const name = 'John'
// const age = 30
// const job = 'Web Developer'
// const city = 'Miami'
// const name = 'John'
// const age = 30
// const job = 'Web Developer'
// const city = 'Miami'

// without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

// with template strings
// function hello(){
//   return 'hello'
// }
// html =  `
// <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>${2+2}</li>
//   <li>${hello()}</li>
//   <li>${age > 30}</li>
//   <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// </ul>`

// document.body.innerHTML = html

// // ############################
// // 012 - Arrays & Array Methods
// // ############################

// // create some arrays
// const numbers1 = [34,23,38,332,3876]
// const numbers2 = new Array(22,234,2,553,41)
// const fruit = ['apple', 'orange', 'pear']
// const mixed = [22, 'hello', true, undefined, null, {2:1, b:1}, new Date]

// let val

// // get array length
// val = numbers1.length

// // check if is array
// val = Array.isArray(numbers1)

// // get a single value
// val = numbers1[0]

// // insert something into an array
// numbers1[2]=100 

// //find index of value
// val = numbers1.indexOf(100)

// // mutating arrays
// // addon to array
// numbers1.push(250)

// // add on to front
// numbers1.unshift(21)

// // take off from back
// numbers1.pop()

// // take off from front
// numbers1.shift()

// // splice values
// // numbers1.splice(1,3)

// // array reverse
// numbers1.reverse()

// // concat arrays
// val = numbers1.concat(numbers2)

// // sort 
// val = fruit.sort()

// val =numbers1.sort()
// val =numbers1.sort()

// // use the compare function
// val = numbers1.sort(function(x,y){
//   return x-y
// })

// // reverse sort
// val = numbers1.sort(function(x,y){
//   return y-x
// })

// // find -- only the first item in array!
// function under50(num){
//   return num<50
// }

// val = numbers1.find(under50)

// console.log(val)
// console.log(numbers1)

// #####################
// 013 - Object Literals
// #####################

// const person ={
//   firstName : 'Steve',
//   lastName: 'Smith',
//   age: 30,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address:{
//     city:'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function(){
//     return 2017 - this.age
//   }
// }

// let val = person
// // get specific value
// val = person.firstName
// val = person['lastName']
// val = person.age
// val = person.hobbies[1]
// val = person.address.state
// val = person.address['state']
// val = person.getBirthYear()


// console.log(val)

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Tom', age: 21},
//   {name: 'Nancy', age: 26},
//   {name: 'Clara', age: 23}
// ]

// for(let i=0; i < people.length; i++){
//   console.log(people[i].name + ' is ' + people[i].age + ' years old');
// }

// ###################
// 014 - Dates & Times
// ###################

let val 

const today = new Date()
let birthday = new Date('1981-10-10 11:25:00')
birthday = new Date('September 10 1981')
birthday = new Date('9/10/1981')

// get dateinformations
val = today.getMonth() //+1 rechnen!!!
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getSeconds()
val = today.getMilliseconds()
val = today.getTime()

// set dateinformations
birthday.setMonth(2)
birthday.setDate(12)
birthday.setYear(2012)

console.log(val)
console.log(birthday)