let textarea = document.getElementById("keylogger")

document.addEventListener('keydown', (event) => {
    textarea.value += event.key
});