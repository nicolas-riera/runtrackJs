function compterVoyelles(phrase) {
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let compte = 0
    for (const lettre of phrase) {
        if (voyelles.includes(lettre.toLowerCase())) {
            compte++
        }
    }
    return compte
}

const voyelles = compterVoyelles("Salut c'est moi")
console.log("La phrase contient " + voyelles + " voyelles.")

