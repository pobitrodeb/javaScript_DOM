let textInput = document.querySelector('#textInput'); 
textInput.addEventListener("focus", (e)=> {
   e.target.style.backgroundColor ="red",
   e.target.style.color ="white"
})