let div = document.createElement('div');
// div.id = "paragraphID";
div.className = "paragraphClass";

div.innerHTML = "<p> This is paragraph tag </p>";

let text = document.createTextNode('Create Text Noede');
div.appendChild(text);

let h1 = document.createElement("strong"); 
h1.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat rerum soluta at ea eos fugit vero similique temporibus. Dicta excepturi dolorum laborum deserunt libero perferendis tempora pariatur recusandae vel quam.';
div.appendChild(h1); 

document.body.appendChild(div);

