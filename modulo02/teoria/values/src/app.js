
const values = (obj) => {
    let arr = [];

    for (field in obj) {
        arr.push(obj[field]);
    }
    return arr;
}

function Person(name) {
    this.name = name;
}

const ownValues = (obj) => {
    
    let arr = [];
    const keys =  Object.keys(obj);
    for (value of keys) {
        arr.push(obj[value]);
    }
    return arr;
}

function Person(name) {
    this.name = name;
}

Person.prototype.walk = function() {
    console.log("I'm walking.");
}

var person = new Person("Peter");

console.log("Algunos print sobre el prototipo de objetos.");
console.log("Un objeto coche: ", {Matricula: "MA3467UV", Modelo: "Seat Ibiza"});
console.log("Un objeto de ls clase Person: ", person);
console.log("El prototipo de la clase person: ", person.__proto__);

console.log("Y ahora, los campos de un objeto Person usando mi funcion values():");
console.log(values(person));

console.log("Y los campos propios de un objeto Person usando mi funcion ownValues():");
console.log(ownValues(person));