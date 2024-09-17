let data = "size";
const bird = {
    size : "small"
}

console.log(bird[data]);
console.log(bird['size']);
console.log(bird.size);
console.log(bird.data);

/* O/P - 
    small
    small
    small
    undefined
*/

let c = {name:'peter'};
let d;

d = c;
c.name = "skr";
console.log(d.name);

/* O/P - 
    skr
*/