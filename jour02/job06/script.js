function laplateforme() {
    document.body.style.backgroundColor = "#0062ff";
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Arial, sans-serif";

    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.height = "100vh"; 
    container.style.color = "white";

    let span = document.createElement("span");
    span.textContent = "La grande école du numérique pour tous !";
    span.style.fontSize = "2.5rem";
    span.style.fontWeight = "bold";
    span.style.textAlign = "center";

    container.appendChild(span);
    document.body.appendChild(container);
}

let input_count = 0

document.addEventListener('keydown', (event) => {
    if ((input_count == 0 || input_count == 1) && event.key == "ArrowUp") {
        console.log("haut")
        input_count++
    } else if ((input_count == 2 || input_count == 3) && event.key == "ArrowDown") {
        console.log("bas")
        input_count++
    } else if ((input_count == 4 || input_count == 6) && event.key == "ArrowLeft") {
        console.log("gauche")
        input_count++
    } else if ((input_count == 5 || input_count == 7) && event.key == "ArrowRight") {
        console.log("droite")
        input_count++
    } else if (input_count == 8 && event.key == "b") {
        console.log("b")
        input_count++
    } else if (input_count == 9 && event.key == "a") {
        console.log("a")
        input_count++
    } else if (input_count == 10 && event.key == "Enter") {
        input_count = -1
        laplateforme()
    } else if (input_count != -1) {
        input_count = 0
    }
});