let a;
let b;

a = 1;
b = (a++, a++, a => a+1)(a);

console.log(b); // o/p - 4

