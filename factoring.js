function factorInPrimes(number) {
    let parts = [];

    while (number > 1) {
        for (let i = 2; i <= number; i++) {
            if (number % i) continue;
            parts.push([number, i]);
            number = number / i;
            break;
        }
    }
    return parts;
}

function print(){
    result = factorInPrimes(26);

    result.forEach((el) => console.log(el));
}

print();