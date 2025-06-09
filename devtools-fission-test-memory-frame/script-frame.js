window.strings = [];
function consumeMemoryFrame() {
  for (var i = 0; i< 100000 ; i++) {
    window.strings.push(new Array(1000).join("a"));
  }
  console.log("DONE IN FRAME");
}
window.document.getElementById("button").addEventListener("click", consumeMemoryFrame);