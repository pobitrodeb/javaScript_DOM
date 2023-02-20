let menu = document.querySelector("#menu"); 

let list = document.createElement("li"); 
list.textContent = "Home", 

// menu.replaceChild(list, menu.firstChild);
menu.replaceChild(list, menu.lastChild);
// menu.removeChild(list, menu.firstChild);
// menu.removeChild(list, menu.lastChild);