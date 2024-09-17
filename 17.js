const numbers = [1,2,3];
numbers[9]=11;
console.log(numbers);
/* O/P - 
    [ 1, 2, 3, <6 empty items>, 11 ]
*/

const numbers = [1,2,3];
numbers[9]=numbers;
console.log(numbers);
/* O/P - 
    Infinite array
*/