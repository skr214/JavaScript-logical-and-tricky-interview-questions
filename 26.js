function test(){
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo(){
        return 4;
    }  
}

test();

/* O/P - 
    undefined
    4
*/