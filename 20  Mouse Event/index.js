let mouseTrack = document.querySelector("#mouseTrack"); 

mouseTrack.addEventListener("mousedown", (e) => {
    console.log(e.type); 
});



mouseTrack.addEventListener("mouseup", (e) => {
    console.log(e.type); 
});


mouseTrack.addEventListener("click", (e) => {
    console.log(e.type); 
});


function mouseEvent(e){
    console.log(e.type);
}
mouseTrack.addEventListener("dblclick", mouseEvent);

// mouseTrack.addEventListener("mouseover", mouseEvent);
// mouseTrack.addEventListener("mouseout", mouseEvent);
// mouseTrack.addEventListener("mouseenter", mouseEvent);
mouseTrack.addEventListener("mouseenter", mouseEvent);