function addOne(count) {

    document.getElementById("compteur").textContent = count
    
}

let count = 1

document.getElementById("button").addEventListener("click", (event) => {
    addOne(count)
    count++
});