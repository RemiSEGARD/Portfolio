const MAX_LINE_LENGTH = 80

const Split80Char = function (json) {
    var splitted_by_line = json.content;
    var res = document.createElement("div");
    res.classList.add("terminal");
    for (var l = 0; l < splitted_by_line.length; l++) {
        var splitted = splitted_by_line[l].split(' ');
        for (var i = 0; i < splitted.length;) {
            var line = document.createElement("div");
            line.classList.add("line");
            res.appendChild(line);

            var line_size = 0;
            while (i < splitted.length && line_size + splitted[i].length <= MAX_LINE_LENGTH) {
                var word = document.createElement("div");
                word.classList.add("word");
                line.appendChild(word);
                var j = 0;
                for (; j < splitted[i].length && !"!,.".includes(splitted[i][j]); j++) {
                    var char = document.createElement("div");
                    char.classList.add("char");
                    char.innerText = splitted[i][j];
                    word.appendChild(char);
                    line_size += 1;
                }
                for (; j < splitted[i].length; j++) {
                    var punctuation = document.createElement("div");
                    punctuation.classList.add("word");
                    var char = document.createElement("div");
                    char.classList.add("char");
                    char.innerText = splitted[i][j];
                    punctuation.appendChild(char);
                    line_size += 1;
                    line.appendChild(punctuation);
                }

                for (var w = 0; w < json.specialWords.length; w++)
                {
                    if (word.innerText === json.specialWords[w].word) {
                        word.classList.add("specialWord");
                    }
                }
                for (var w = 0; w < json.keyWords.length; w++)
                {
                    if (word.innerText === json.keyWords[w]) {
                        word.classList.add("keyWord");
                    }
                }
                i++;
                if (i < splitted.length && line_size + splitted[i].length <= MAX_LINE_LENGTH) {
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
        }
    }
    return res;
}