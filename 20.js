console.log([...'str']);
/* O/P - 
    ['s','t','r']
*/

let data = 3+4+'5';
console.log(data);
console.log(typeof data);
/* O/P - 
    75
    string
*/

console.log(typeof 3+4+'5');
/* O/P - 
    number45
*/

console.log(typeof (3+4+'5'));
/* O/P - 
    string
*/

console.log(typeof (3+4+ +'5'));
/* O/P - 
    number
*/

console.log([]==[]);
/* O/P - 
    false
*/