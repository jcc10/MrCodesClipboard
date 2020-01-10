var nameBox = document.getElementById("Name");
var getBuddon = document.getElementById("getBuddon");
var clipboard = document.getElementById("Clipboard");
var saveBuddon = document.getElementById("saveBuddon");

getBuddon.addEventListener("click", async () => {
    var name = nameBox.value;
    var results = await fetch('/get', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({name: name})
    }).then(res => res.json());
    displayClipboard(results);
});

saveBuddon.addEventListener("click", () => {
    var newBoard = clipboard.value;
    var name = nameBox.value;
    var results = await fetch('/set', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({name: name, content: newBoard})
    }).then(res => res.json());
    displayClipboard(results);
});

function displayClipboard(results) {
    clipboard.value = results.data;
};
