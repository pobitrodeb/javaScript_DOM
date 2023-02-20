let app = document.querySelector("#app"); 

let language = ["Laravel", "JavaScript", "VueJs"];

let createLanguage =  language.map((languageName) => {
    let li = document.createElement("li"); 
    li.textContent = languageName; 
    return li; 
});

app.append(...createLanguage);