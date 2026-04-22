$("body").append("<input type='text'>")
$('input').css("width", "50px");

function changeLengh() {
    let lengh = $("input").val().length;
    $('input').css("width", (lengh * 10 + 20) + "px");
}

$("input").on("input", function() {
    changeLengh()
})

$("input").on("focus", function() {
    changeLengh()
});

$("input").on("blur", function() {
    $('input').css("width", "50px");
});

