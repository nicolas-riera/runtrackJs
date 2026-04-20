function tri(numbers, order) {
    if (order == "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order == "desc") {
        numbers.sort((a, b) => b - a);
    }
}

const numbers = [40, 100, 1, 5, 25];
console.log(numbers)

tri(numbers, "asc")
console.log(numbers)

tri(numbers, "desc")
console.log(numbers)