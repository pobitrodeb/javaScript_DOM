let heading =  document.getElementById('heding');
heading.innerHTML = "Pobitro Debnath"; 


let CardDesign = document.getElementsByClassName('CardDesign')[2]; 
// [0] is class index number 
CardDesign.innerHTML = "This card change by JS"; 

let paragraph = document.getElementsByName('thisIsParagraphTag')[0]; 
paragraph.innerHTML = 'This is First Paragraph Tag '; 


let paragraph1 = document.getElementsByName('thisIsParagraphTag')[1]; 
paragraph1.innerHTML = 'This is Secound Paragraph Tag '; 

let paragraph2 = document.getElementsByName('thisIsParagraphTag')[2]; 
paragraph2.innerHTML = 'This is Secound Paragraph Tag '; 

let paragraph3 = document.getElementsByName('thisIsParagraphTag')[3]; 
paragraph3.innerHTML = 'This is Third Paragraph Tag '; 


// Now we see getElementByTag
let h4 = document.getElementsByTagName('h4')[0]; 
h4.innerHTML = 'Replace Heading 4 Tag';
