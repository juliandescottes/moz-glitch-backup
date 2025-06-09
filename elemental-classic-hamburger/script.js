window.increaseStuff = 0;

function runSomething(obj) {
  window.increaseStuff++;
  console.log(window.increaseStuff, obj);
  obj[window.increaseStuff] = true;
  debugger;
} 

runSomething({});