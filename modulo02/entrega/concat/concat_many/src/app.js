const concat = (...arr) => {

    var result = [];

    for (i of arr) {
        result.push(...i);
    }
    return result;
}

console.log(concat(["Primero", "Segundo"], ["Tercero", "Cuarto", "Quinto"], ["Sexto", "Septimo"]));

