const MoveHighlight = function (c_dir, l_dir) {
    char_lines[l][c].classList.remove("cursor")
    console.log(char_lines[l].length);
    if (c_dir != 0 && char_lines[l].length != 1 && (c == 0 && c_dir != -1 || c == char_lines[l].length - 1 && c_dir != 1 || c != 0 && c != char_lines[l].length - 1)) {
        console.log("bite")
        c += c_dir;
        previous_c = c;
    }
    else if (l_dir != 0 && (l == 0 && l_dir != -1 || l == char_lines.length - 1 && l_dir != 1 || l != 0 && l != char_lines.length - 1)) {
        l += l_dir;
        if (previous_c >= char_lines[l].length) {
            c = char_lines[l].length - 1;
        }
        else {
            c = previous_c;
        }
    }
    console.log(`${c} ${l}`);
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

var content = document.getElementById('content');

var lines = content.getElementsByClassName('line');
var char_lines = [];
for (var i = 0; i < lines.length; i++) {
    char_lines.push(lines[i].getElementsByClassName('char'));
}

var c = 0;
var l = 0;
var previous_c = 0;

char_lines[l][c].classList.add("cursor");

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    Move(code);
})

console.log(char_lines);