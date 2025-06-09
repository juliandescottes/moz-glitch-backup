document.querySelector("button").addEventListener("click", () => {
  const count = parseInt(document.querySelector("div").textContent);
  document.querySelector("div").innerHTML = count + 1;
})