function jourTravaille(date) {
    const datesFeries2024 = [
        new Date(2024, 0, 1),
        new Date(2024, 3, 1),
        new Date(2024, 4, 1),
        new Date(2024, 4, 8),
        new Date(2024, 4, 9),
        new Date(2024, 4, 20),
        new Date(2024, 6, 14),
        new Date(2024, 7, 15),
        new Date(2024, 10, 1),
        new Date(2024, 10, 11),
        new Date(2024, 11, 25)
    ];

    if (datesFeries2024.some(d => d.getTime() === date.getTime())) {
        console.log("Le " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " est un jour férié.")
    } else if (date.getDay() == 0 || date.getDay() == 6) {
        console.log("Non, " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " est un week-end.")
    } else {
        console.log("Oui, " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " est un jour travaillé.")
    }
}

let date = new Date(2024, 0, 8);;

jourTravaille(date)