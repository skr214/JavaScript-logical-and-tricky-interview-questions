const foo = ()=>console.log('First');
const bar = ()=> setTimeout(()=>console.log("Second"));
const baz = ()=>console.log("Third");

foo();
bar();
baz();

/* O/P - 
    First
    Third
    Second
*/

const foo1 = ()=>console.log('First');
const bar1 = ()=> setTimeout(()=>console.log("Second"));
const baz1 = ()=>console.log("Third");

bar1();
baz1();
foo1();

/* O/P - 
    Third
    First
    Second
*/

