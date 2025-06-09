/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
iframe.addEventListener("load", (e) => { console.log(event.target); }, true);
iframe.src = "data:text/html,test";