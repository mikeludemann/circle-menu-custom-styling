var barElement = document.getElementById("bar--navigation");
var navi = document.getElementById("nav");

barElement.addEventListener("click", clickBurgerIcon, false);

function clickBurgerIcon() {

	barElement.classList.toggle('active');
  navi.classList.toggle('visible');
  
}
