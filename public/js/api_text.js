
let timeouts = [],
    intervals = [];

 const magic = document.querySelector(".magic");

 magic.onmouseenter = () => {
   let index = 1;
  
   for(const star of document.getElementsByClassName("magic-star")) {
     timeouts.push(setTimeout(() => {  
       animate(star);
      
       intervals.push(setInterval(() => animate(star), 1000));
     }, index++ * 300));
   };
 }

 magic.onmouseleave = onMouseLeave = () => {
   for(const t of timeouts) clearTimeout(t);  
   for(const i of intervals) clearInterval(i);
  
   timeouts = [];
   intervals = [];
 }