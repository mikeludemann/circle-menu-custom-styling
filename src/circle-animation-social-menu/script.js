/*
var items = document.querySelectorAll('.circle--menu a');

for(var i = 0, l = items.length; i < l; i++) {

	items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1/l) * i * Math.PI)).toFixed(4) + "%";
  items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1/l) * i * Math.PI)).toFixed(4) + "%";
  
}
*/

var buttonMenu = document.getElementsByClassName("button--menu")[0];
var circleMenu = document.getElementsByClassName("circle--element")[0];

buttonMenu.addEventListener("click", function(e){

  e.preventDefault(); 
  circleMenu.classList.toggle('open');

});