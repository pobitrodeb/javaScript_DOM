let app = document.querySelector("#app"); 

let language = ["Laravel", "JavaScript", "VueJs"];

let createLanguage =  language.map((languageName) => {
    let li = document.createElement("li"); 
    li.textContent = languageName; 
    return li; 
});

app.append(...createLanguage);

// console.log("Now we are see preppend");
// Prepend Method

let pre = document.querySelector("#apps"); 
let frontEnd = ["JS", "BootStrap", "CSS"];
let creteFontEndItem = frontEnd.map((frontEndLang) => {
    let li = document.createElement("li"); 
    li.textContent = frontEndLang; 
    return li; 
});

apps.prepend(...creteFontEndItem);