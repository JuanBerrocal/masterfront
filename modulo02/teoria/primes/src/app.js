const isPrime = (num) => {

    let i = 2;

    if (num < 2) {
        return false;
    }

    while (i < num) {
        if ((num % i) === 0) {
            return false;
        }
        i++;
    }
    return true;
}

const showPrimes = (from, to) => {
    for (let i = from; i <= to; i++) {
        console.log("El numero " + i + (isPrime(i) ? " es PRIMO!!" : " no es primo."));
    }
    
}

showPrimes(1, 100);