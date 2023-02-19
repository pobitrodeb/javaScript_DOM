let ul = document.createElement("ul"); 
ul.id = "menu"; 

// variable declear 
let li1 = document.createElement("li");
li1.textContent = "Home";
ul.appendChild(li1);
let li2 = document.createElement("li");
li2.textContent = "About";
ul.appendChild(li2);
let li3 = document.createElement("li");
li3.textContent = "Service";
ul.appendChild(li3);


document.body.appendChild(ul);
