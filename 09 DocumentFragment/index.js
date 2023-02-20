let menu = document.querySelector("#menu"); 
let lang = ['PHP', 'JavaScript', 'VueJs'];

let fragment = document.createDocumentFragment();
lang.forEach((language) => {
    let li = document.createElement("li");
   li.textContent = language;
   fragment.appendChild(li); 
})

menu.appendChild(fragment);