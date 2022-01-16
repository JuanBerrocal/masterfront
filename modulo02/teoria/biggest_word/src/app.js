function getLongestWord(phrase) {

    var words = phrase.split(" ");
    var longest = "";
    
    for (var word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    
    }
    return longest;
}

console.log("La lluvia en Guadalajara es una pura maravilla");
console.log("La palabra mas larga es: " + getLongestWord("La lluvia en Guadalajara es una pura maravilla"));