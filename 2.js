for(var i=0;i<3;i++){
    setTimeout(()=>console.log(i))
}

/* O/P - 
    3 
    3
    3
*/

for(let i=0;i<3;i++){
    setTimeout(()=>console.log(i))
}

/* O/P - 
    0 
    1
    2
*/