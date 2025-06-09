/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
window.value = "init-value";
document.querySelector("input").addEventListener("input", () => {
  // Slow down the handler a bit
  for (var i = 0 ; i < 10000; i++) {
    console.log(i);
  }
  // Update the value that will be checked by the test
  window.value = document.querySelector("input").value;
});
