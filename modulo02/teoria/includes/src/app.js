function includes(array, value) {
    var result = false;
    
    return (array.indexOf(value) != -1);
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false