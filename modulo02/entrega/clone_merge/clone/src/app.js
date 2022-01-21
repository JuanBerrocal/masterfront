

const clone = (source) => {
    var result = new Object();
    for (i in source) {
        result[i] = source[i];
    }
    return result;
}

console.log(clone({nombre:"Juan", edad:18}));