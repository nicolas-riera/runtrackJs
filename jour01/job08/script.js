function estPremier(n) {
    if (n < 2) return false;
    
    if (n === 2) return true;
    
    if (n % 2 === 0) return false;

    const limite = Math.sqrt(n);
    for (let i = 3; i <= limite; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function sommeNombresPremiers(nb1, nb2) {
    if (estPremier(nb1) && estPremier(nb2)) {
        return nb1 + nb2
    } else {
        return false
    }
}

console.log(sommeNombresPremiers(2, 3))