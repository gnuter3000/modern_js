
// ###############################
//  03 - DOM Manipulation & Events
// ###############################

// ###################################
// 022 - Examining The Document Object
// ###################################

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
//   console.log(script);
// });

// console.log(val);

// ########################################
// 023 - DOM Selectors For Single Elements
// ########################################

// grab one element by its id
let val
// document.getElementById()
console.log(document.getElementById('task-title'));

// get things from the element
val=document.getElementById('task-title').id
val=document.getElementById('task-title').className

// change styling
document.getElementById('task-title').style.background = 'red'
document.getElementById('task-title').style.color = '#fff'
document.getElementById('task-title').style.padding = '15px'
// document.getElementById('task-title').style.
display = 'none'

// change content
document.getElementById('task-title').textContent='Task Lists'
document.getElementById('task-title').innerText='myTasks'
document.getElementById('task-title').innerHTML='<span style="color:yellow">TaskLists</span>'

// querySelector
val = document.querySelector('#task-title')
val = document.querySelector('.card-title')
val = document.querySelector('h5')

document.querySelector('li').style.color='red' //just the first one
document.querySelector('ul li').style.color='blue'

document.querySelector('li:last-child').style.color='red'
document.querySelector('li:nth-child(3)').style.color='yellow'
document.querySelector('li:nth-child(4)').textContent='Hello World'
document.querySelector('li:nth-child(odd)').style.background='#ccc'
document.querySelector('li:nth-child(even)').style.background='#f4f4f4'

console.log(val);
