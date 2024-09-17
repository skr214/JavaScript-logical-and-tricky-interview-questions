function Car(){
    this.make = 'TATA';

    return {make:'KIA'}
}

const myCar = new Car();
console.log(myCar.make);

/* O/P - 
    KIA
*/
