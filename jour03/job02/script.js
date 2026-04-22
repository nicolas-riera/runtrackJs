$(document).ready(function() {
    function initDrag() {
        $(".piece").draggable({
            revert: "invalid",
            stack: ".piece",
            cursor: "grabbing"
        });
    }

    initDrag();

    $(".drop-zone, #bank").droppable({
        accept: ".piece",
        drop: function(event, ui) {
            let area = $(this);
            if (area.hasClass("drop-zone") && area.children().length > 0) return;
            
            ui.draggable.appendTo(area).css({top: 0, left: 0});
            checkWin();
        }
    });

    $("#shuffle").click(function() {
        let pieces = $(".piece").get();
        for (let i = pieces.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
        $("#bank").empty().append(pieces);
        $(".piece").css({top: 0, left: 0});
        initDrag();
        $("#result").text("").attr("class", "");
    });

    function checkWin() {
        let zones = $(".drop-zone");
        let placedCount = 0;
        let correctCount = 0;

        zones.each(function() {
            let piece = $(this).find(".piece");
            if (piece.length > 0) {
                placedCount++;
                if (piece.data("id") == $(this).data("correct")) {
                    correctCount++;
                }
            }
        });

        if (placedCount === 6) {
            if (correctCount === 6) {
                $("#result").text("Vous avez gagné").attr("class", "win");
            } else {
                $("#result").text("Vous avez perdu").attr("class", "lose");
            }
        } else {
            $("#result").text("").attr("class", "");
        }
    }
});