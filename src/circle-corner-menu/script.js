var menuLeft = document.getElementById('menu--circle--left');
var menuRight = document.getElementById('menu--circle--right');

menuLeft.addEventListener("click", function(){
  this.classList.toggle('active');
});

menuRight.addEventListener("click", function(){
  this.classList.toggle('active');
});