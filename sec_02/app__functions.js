/*FUNCTIONS*/

function greet(firstName = 'Max', lastName = 'Mustermann'){
    return 'Hello World ' + firstName + ' ' + lastName +' from a return of function!';
}

// greet();
// console.log(greet());
// console.log(greet('Clara', 'Weissenbaeck'));

/*FUNCTION EXPRESSION*/

const sqr = function(x=1){
    return x*x;
};

// console.log(sqr(4));


/*IMMIDIATLY INVOKABLE FUNCTION EXPRESSIONS == IFFEs*/

/*(function(){
    console.log('IFFE RAN ...');
})();
*/

/*(function(name){
    console.log('Hello ' + name);
})('Clara');
*/

/*PROPERTY METHODS*/
const todo = {
    add: function(){
        console.log('Add todo ...');
    },

    edit: function(id){
        console.log(`Edit todo ID: ${id}`);
    }
};

todo.delete=function(id){
    console.log(`Deleted ID: ${id}`);
};

todo.add();
todo.edit(12);
todo.delete(322);
