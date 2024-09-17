let data = [1,2,3].map(num=>{
    if(typeof num == 'number') return;
    return num * 2;
})

console.log(data);
/* O/P - 
    [ undefined, undefined, undefined ]
*/
