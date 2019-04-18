var nameBox = document.getElementById("Name");
var getBuddon = document.getElementById("getBuddon");
var clipboard = document.getElementById("Clipboard");
var saveBuddon = document.getElementById("saveBuddon");

getBuddon.addEventListener("click", () => {
    var name = nameBox.value;
    var request = new XMLHttpRequest();
    request.addEventListener("load", displayClipboard);
    request.open("POST", "/get");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("name=" + name);
});

saveBuddon.addEventListener("click", () => {
    var newBoard = clipboard.value;
    var name = nameBox.value;
    var request = new XMLHttpRequest();
    request.addEventListener("load", displayClipboard);
    request.open("POST", "/set");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("content=" + newBoard + "&name=" + name);
});

function displayClipboard() {
    clipboard.value = this.response;
    console.log(this.response);
};