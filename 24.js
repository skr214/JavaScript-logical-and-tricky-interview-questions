(()=>{
    let x = 10;
})()

console.log(typeof x);
/* O/P - 
    undefind
*/

(()=>{
    let x = y = 10;
})()

console.log(typeof y);
/* O/P - 
    number
*/

(()=>{
    let x = y = 10;
})();

(()=>{
    let x = y = 20;
})();

console.log(y);
/* O/P - 
    20
*/

let a = 100;
(()=>{
    var a = 20;
})()

console.log(a);
/* O/P - 
    100
*/