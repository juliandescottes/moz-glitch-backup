window.strings = [];
function createMarkupFrame() {
  for (var i = 0; i< 100000 ; i++) {
    const div = document.createElement("div");
    document.body.append(div);
    div.remove;
    window.strings.push(new Array(1000).join("a"));
  }
  console.log("DONE IN FRAME");
}
window.document.getElementById("button").addEventListener("click", createMarkupFrame);