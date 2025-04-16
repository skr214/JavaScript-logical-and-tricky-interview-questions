function foo(){
    console.log("Woof!");
}

foo.name = "apple";
foo.likely = "Great";
console.log(foo.name);
console.log(foo.likely);

foo();
/* O/P - 
    foo -> name of the functioin
    Great
    Woof!
*/


function sum(a,b){
    return a + b;
}
console.log(sum(1,"2"));
/* O/P - 
    12
*/