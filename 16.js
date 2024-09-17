function sayHi(){
    return (()=>0)();
}

console.log(sayHi());
console.log(typeof sayHi());
/* O/P - 
    0
    number
*/

function sayHello(){
    return ()=>0;
}

console.log(sayHello());
console.log(typeof sayHello());
console.log(sayHello()());
console.log(typeof sayHello()());

/* O/P - 
    [Function (anonymous)]
    function
    0
    number
*/

console.log(typeof typeof 1);
/* O/P - 
    string
*/
