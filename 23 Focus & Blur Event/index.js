let textInput = document.querySelector('#textInput'); 
textInput.addEventListener("focus", (e)=> {
   e.target.style.backgroundColor ="red",
   e.target.style.color ="white"
})
textInput.addEventListener("blur", (e)=> {
   e.target.style.backgroundColor ="white",
   e.target.style.color ="red"
})