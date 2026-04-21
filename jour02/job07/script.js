function changeTheme(click_counter) {

    let wifi = document.getElementById("wifi")

    if (click_counter % 2 == 0) {
        document.body.style.backgroundColor = "black"
        wifi.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        wifi.style.color = "black"
    }
}

let click_counter = 0

document.getElementById("button").addEventListener("click", (event) => {
    changeTheme(click_counter)
    click_counter++
});