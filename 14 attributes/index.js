let div = document.querySelector("div"); 
div.id = "menu";

let btn = document.querySelector("#btn"); 

if(btn){
    btn.setAttribute("name", "Pobitro");
}

// get attribute 

let btn2 = document.querySelector("btn2"); 

if(btn2){
    console.log(btn2.getAttribute("target"))
}