window.addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    const count = parseInt(document.querySelector("div").textContent);
    document.querySelector("div").innerHTML = count + 1;
    e.preventDefault();
    e.stopPropagation();
  }
}, true)