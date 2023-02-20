let menu = document.querySelector("#menu"); 

let list = document.createElement("li"); 
list.textContent = "Home", 

// menu.replaceChild(list, menu.firstChild);
menu.replaceChild(list, menu.lastChild);