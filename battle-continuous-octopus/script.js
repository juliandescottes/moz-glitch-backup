document.getElementById("button").addEventListener("click", () => {
  const someBoolean = false;
  [1,2,3,4,5,6,7,8,9].reduce((p, n) => {
    (() => {
      console.log(n,p);
      if (someBoolean) {
        console.log("does not run");
      }
    })();
    return p + n;
  },0);
});
