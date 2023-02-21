let btn = document.querySelector("#btn"); 

// DOM Level 0 event handlers
// btn.onclick = function() {
//     alert('Clicked!');
// };

// btn.onclick = function() {
//     alert(this.id); 
// };

// DOM Level 2 event handlers

// btn.addEventListener('click',function(event) {
//     alert(event.type); // click
// });

btn.addEventListener('click',function(event) {
    alert('You clicked btton ');
});
// btn.addEventListener('click', showAlert);

// remove the event listener
// btn.removeEventListener('click', showAlert);