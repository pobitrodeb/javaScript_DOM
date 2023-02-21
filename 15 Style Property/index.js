let text = document.querySelector("#article"); 
// text.style.background = "red";
// text.style.color      = "white";
// text.style.padding    = "15px";
text.style.cssText = "background:green; color:white;"

// Get Computed Style Method
let textTwo = document.querySelector(".textTwo");
let style = getComputedStyle(textTwo); 
console.log(style.fontSize);