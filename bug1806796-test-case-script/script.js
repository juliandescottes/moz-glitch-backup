window.addEventListener("unload", event =>
{  
  // will throw
  document.getElementById("main").innerHTML = "";  
});