(function () {
  debugger;
  let i = 0;
  window.setInterval(() => {
    i++;
    if (i === 100) {
      i = 0;
    }
  }, 10);
})();