const obj = {1:'a',2:'b',3:'c'};
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));
/* O/P - 
    true
    true
*/

const obj1 = {"1":'a',"2":'b',"3":'c'};
console.log(obj1.hasOwnProperty("1"));
console.log(obj1.hasOwnProperty(1));
/* O/P - 
    true
    true
*/

const obj2 = {"hello":'a',"2":'b',"3":'c'};
console.log(obj1.hasOwnProperty("hello"));
console.log(obj1.hasOwnProperty(hello));
/* O/P - 
    true
    error
*/