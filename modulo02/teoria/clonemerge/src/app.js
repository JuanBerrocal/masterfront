
/*----------Apartado A -----------------------------*/

clone = (source) => {
    var result = new Object();
    for (i in source) {
        result[i] = source[i];
    }
    return result;
}

console.log(clone({nombre:"Juan", edad:18}));

/*----------Apartado B -----------------------------*/

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

merge = (a, b) => {
    var result = clone(b);
    
    for (i in a) {
        result[i] = a[i];
    }

    return result;
}

console.log(merge(a, b));
