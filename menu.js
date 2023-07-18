var menu= document.querySelector(".menu-bar");
var navBar= document.querySelector(".nav-bar");
menu.addEventListener("click", ()=>{
    navBar.classList.toggle("open");
})