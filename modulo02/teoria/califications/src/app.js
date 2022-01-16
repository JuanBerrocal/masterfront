
const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };

const values = (obj) => {
    let arr = [];

    for (field in obj) {
        arr.push(obj[field]);
    }
    return arr;
}

var getAverage = (classResults) => {
    let total = 0;
    for (i of classResults) {
        total += i;
    }
    return total / classResults.length;
}

function printAverage(classResults) {
    let average = getAverage(classResults);

    if (average === 10) {
        console.log(average + " Matricula de Honor ");
    }
    else if (average < 10 && average >= 9) {
        console.log(average + " Sobresaliente");
    }
    else if (average < 9 && average >= 7) {
        console.log(average + " Notable");
    }
    else if (average < 7 && average >= 6) {
        console.log(average + " Bien");
    }
    else if (average < 6 && average >= 5) {
        console.log(average + " Suficiente");
    }
    else if (average < 5 && average >= 4) {
        console.log(average + " Insuficiente");
    }
    else {
        console.log(average + " Muy deficiente");
    }
}

printAverage(values(eso2o));