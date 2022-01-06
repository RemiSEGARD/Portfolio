async function JSONtoTerminal(file, id) {
  await fetch(file).then((response) =>
    response.json().then((response) => {
      var terminal = document.getElementById(id);
      var test = Split80Char(response);
      terminal.innerText = "";
      terminal.appendChild(test);

      lines = terminal.getElementsByClassName("line");
      for (var i = 0; i < lines.length; i++) {
        char_lines.push(lines[i].getElementsByClassName("char"));
      }

      c = 0;
      l = 0;
      previous_c = 0;

      char_lines[l][c].classList.add("cursor");
      lines[l].classList.add("cursorline");
    })
  );
}

JSONtoTerminal('../assets/main.json', 'content');