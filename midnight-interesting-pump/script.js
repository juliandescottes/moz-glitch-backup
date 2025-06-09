const btn = document.querySelector("button"); 

function arraySum(arr) {
 let func1 = () => {
     let x = 1;
     const y = 3;
     for (let i = 0; i < 1000000000; i++) {
           x = x + y;
     }
     return x;
}

let func2inline = (x, y) => {
     return x + y;
}

let func2 = () => {
     let x = 1;
     const y = 3;
     for (let i = 0; i < 1000000000; i++) {
           x = func2inline(x, y);
     }
     return x;
}
 
let now, later;
let func = func1;
now = new Date();
console.log(func());
later = new Date();
console.log(later - now);
func = func2;
now = new Date();
console.log(func());
later = new Date();
console.log(later - now);
}

btn.onclick = function() {
  arraySum(new Array(100000000))
};
