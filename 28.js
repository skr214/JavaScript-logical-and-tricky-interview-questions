const obj = {
    a:1,
    b:{
        c:2,
        d:{
            e:3
        },
    },
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

const values = [];
const keys = [];

function giveKeyAndValue(obj){

    for(let key in obj){
        if(typeof obj[key] == 'object'){
            keys.push(key);
            giveKeyAndValue(obj[key]);
        } else {
            keys.push(key);
            values.push(obj[key]);
        }
    }
}

giveKeyAndValue(obj);
console.log(keys);
console.log(values);


