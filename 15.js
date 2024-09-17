const person = {name:'Lydia'};

function sayHi(age){
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person,21));
console.log(sayHi.apply(person,[21]));
console.log(sayHi.bind(person,21));

/* O/P - 
    Lydia is 21
    Lydia is 21
    [Function: bound sayHi]
*/
