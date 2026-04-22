$(document).ready(function() {
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
    let playing = true;
    const winOrder = [1, 4, 7, 2, 5, 8, 3, 6, 9];

    function initGame() {
        playing = true;
        $("#message").text("").removeClass("win");
        do {
            board.sort(() => Math.random() - 0.5);
        } while (!isSolvable(board));
        render();
    }

    function render() {
        $("#grid").empty();
        board.forEach((val, index) => {
            if (val === 9) {
                $("#grid").append('<div class="empty" data-index="' + index + '"></div>');
            } else {
                $("#grid").append('<img src="img/logo' + val + '.png" class="tile" data-index="' + index + '">');
            }
        });
    }

    $(document).on("click", ".tile", function() {
        if (!playing) return;
        let currentIndex = $(this).data("index");
        let emptyIndex = board.indexOf(9);
        if (isAdjacent(currentIndex, emptyIndex)) {
            [board[currentIndex], board[emptyIndex]] = [board[emptyIndex], board[currentIndex]];
            render();
            checkWin();
        }
    });

    function isAdjacent(idx1, idx2) {
        let r1 = Math.floor(idx1 / 3), c1 = idx1 % 3;
        let r2 = Math.floor(idx2 / 3), c2 = idx2 % 3;
        return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;
    }

    function checkWin() {
        if (board.every((val, i) => val === winOrder[i])) {
            $("#message").text("Vous avez gagné").addClass("win");
            playing = false;
        }
    }

    function isSolvable(arr) {
        let inv = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = i + 1; j < 9; j++) {
                let valI = winOrder.indexOf(arr[i]);
                let valJ = winOrder.indexOf(arr[j]);
                if (arr[i] !== 9 && arr[j] !== 9 && valI > valJ) inv++;
            }
        }
        return inv % 2 === 0;
    }

    $("#restart").click(initGame);
    initGame();
});