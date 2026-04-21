function citation() {

    let span = document.createElement("span")
    let content = document.getElementById("citation")

    span.textContent = "L'important n'est pas la chute, mais l'atterrissage."

    content.appendChild(span)
    
    console.log(content)
}

function showhide() {
    let content = document.getElementById("citation")
    content.classList.toggle('hidden');
}

let has_pressed = false

document.getElementById("button").addEventListener("click", (event) => {
    if (!has_pressed) {
        has_pressed = true
        citation()
    } else {
        showhide()
    }
});