let div = document.createElement('div'); 
div.id = "Menu"; 


let p = document.createElement('p'); 
p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at quibusdam sequi, deleniti ratione id voluptate dolorum. Necessitatibus laboriosam et quisquam sequi ut magnam! Tempore excepturi dolores ratione ipsum. Saepe?";
div.appendChild(p); 

document.body.appendChild(div); 

let menu = document.querySelector("#menu"); 
function createMenuList(listIteamName){
    let list = document.createElement("li"); 
    list.textContent = "listIteamName"; 
    return list;
}

menu.appendChild(createMenuList("Home"));
menu.appendChild(createMenuList("About"));
menu.appendChild(createMenuList("Services"));
menu.appendChild(createMenuList("Portfolio"));
menu.appendChild(createMenuList("Contact Us "));
