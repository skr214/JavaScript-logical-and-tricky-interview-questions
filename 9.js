function getAge(){
    'use strict'
    age = 12;
    console.log(age);
}

getAge();
/* O/P - 
    error
*/

function getAge1(){
    'use strict'
   let age = 12;
    console.log(age);
}

getAge1();
/* O/P - 
    12
*/

function getAge2(){
    age = 12;
    console.log(age);
}

getAge2();
/* O/P - 
    12
*/


