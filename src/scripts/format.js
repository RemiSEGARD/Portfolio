const MAX_LINE_LENGTH = 80

const Split80Char = function (text) {

    var splitted_by_line = text.split("\n");
    var res = document.createElement("div");
    res.classList.add("terminal")

    for (var l = 0; l < splitted_by_line.length; l++) {
        var splitted = splitted_by_line[l].split(' ');
        for (var i = 0; i < splitted.length;) {
            var line = document.createElement("div");
            line.classList.add("line");

            var line_size = 0;
            while (i < splitted.length && line_size + splitted[i].length <= MAX_LINE_LENGTH) {
                var word = document.createElement("div");
                word.classList.add("word");
                for (var j = 0; j < splitted[i].length; j++) {
                    var char = document.createElement("div");
                    char.classList.add("char");
                    char.innerText = splitted[i][j];
                    word.appendChild(char);
                    line_size += 1;
                }
                i++;
                line.appendChild(word);
                if (i < splitted.length && line_size + splitted[i].length < MAX_LINE_LENGTH) {
                    var word = document.createElement("div");
                    word.classList.add("word")
                    var char = document.createElement("div");
                    char.classList.add("char");
                    char.innerHTML = "&nbsp;";
                    line.appendChild(char);
                    line_size += 1;
                }
            }
            if (line.getElementsByClassName("char").length == 0) {
                var char = document.createElement("div");
                char.classList.add("char");
                char.innerHTML = "&nbsp;";
                line.appendChild(char);
                line_size += 1;

            }
            if (line_size != MAX_LINE_LENGTH) {
                var line_end = document.createElement("div");
                line_end.classList.add("lineEnd");
                line_end.classList.add("unselectable");
                for (; line_size < MAX_LINE_LENGTH; line_size++) {
                    var char = document.createElement("div");
                    char.classList.add("unselectable");
                    char.innerHTML = "&nbsp;";
                    line_end.appendChild(char);
                }
                line.appendChild(line_end);
            }
            line.lastChild.lastChild.classList.add("lastChar");
            res.appendChild(line);
        }
    }
    return res;
}

var terminal = document.getElementById('content');
var test = Split80Char(terminal.innerText);
terminal.innerText = '';
terminal.appendChild(test);