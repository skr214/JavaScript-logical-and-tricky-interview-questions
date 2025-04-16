const myfun = ()=>{
    console.log(this);
    console.log("Hello");
    
}

myfun();

//Global Context: If you're running this in a non-strict mode in a browser, this will refer to the global object (window). In strict mode, it will be undefined.

const myfun1 = function(){
    console.log(this);
}

myfun1();


function myfun2(){
    console.log(this);
}

myfun2();