document.querySelector("button").addEventListener("click", () => {
  const body = new Array(1 * 1024 * 1024).join("x");
  fetch("https://excited-fluorescent-creator.glitch.me/",
    {
      method: 'POST',
      body: body,
    });
})