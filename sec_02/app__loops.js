/*GENERAL LOOPS*/

/*##########################################*/

/*FOR LOOP*/
/*
for (let i = 0; i < 10; i++){
    if (i===2) {
        console.log('2 is my fav num');
        continue;
    }

    if (i===5) {
        console.log('stoped the loop')
        break;

    }
    console.log(`Number: ${i}`);
}
*/
/*##########################################*/

/*WHILE LOOP*/
/*
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
*/

/*##########################################*/

/*DO WHILE*/
/*
let i = 0;
do{
    console.log(i);
    i++;
}
while (i<10);
*/

/*##########################################*/

/*LOOP THRU ARRAYS*/
const cars = ['ford', 'chevy', 'toyota', 'bmw'];

/*FOR LOOP*/
/*
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
*/

/*FOR EACH*/
/*
cars.forEach( function(element) {
    console.log(element);
});
*/

/*MAP*/
/*
const users = [
{id:1, name:'John'},
{id:2, name: 'Clara'},
{id:3, name:'Charlotte'}
];

const ids = users.map(function(user){
    return user.name;
});

console.log(ids);
*/

/*FOŔ IN LOOP*/
/*
const user = {
    firstName: 'Gunther',
    lastName: 'Weissenbaeck',
    age: 40
};

for (let x in user){
    console.log(`${x}: ${user[x]}`);
}
*/
