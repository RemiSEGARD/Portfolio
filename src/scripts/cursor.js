var char_lines = [];
var lines = [];
var c = 0;
var l = 0;
var previous_c = 0;

const MoveHighlight = function (c_dir, l_dir) {
    char_lines[l][c].classList.remove("cursor")
    if (c_dir != 0 && char_lines[l].length != 1 && (c == 0 && c_dir != -1 || c == char_lines[l].length - 1 && c_dir != 1 || c != 0 && c != char_lines[l].length - 1)) {
        c += c_dir;
        previous_c = c;
    }
    else if (l_dir != 0 && (l == 0 && l_dir != -1 || l == char_lines.length - 1 && l_dir != 1 || l != 0 && l != char_lines.length - 1)) {
        lines[l].classList.remove("cursorline");
        l += l_dir;
        if (previous_c >= char_lines[l].length) {
            c = char_lines[l].length - 1;
        }
        else {
            c = previous_c;
        }
        lines[l].classList.add("cursorline");
    }
    char_lines[l][c].classList.add("cursor")
}

const Move = function (code) {
    if (code == 'ArrowRight' || code == 'KeyL') {
        MoveHighlight(1, 0);
    }
    else if (code == 'ArrowLeft' || code == 'KeyH') {
        MoveHighlight(-1, 0);
    }
    else if (code == 'ArrowUp' || code == 'KeyK') {
        MoveHighlight(0, -1);
    }
    else if (code == 'ArrowDown' || code == 'KeyJ') {
        MoveHighlight(0, 1);
    }
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    Move(code);
})