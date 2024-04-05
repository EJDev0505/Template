window.addEventListener("load", () => {
    const fade1 = document.querySelector(".fade1");
        fade1.style.left = "100%";   
});



const navlinklist = document.querySelector(".nav-ul");
const navlink = document.querySelector("#navlinks");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const imagelist = document.querySelectorAll(".img")
const listItems = document.querySelectorAll('#ul li');


  
listItems.forEach(item => {
    item.addEventListener('click',() =>{
        if(window.innerWidth < 2000){
        closeBtnFunction();
        }
    });
});

openBtn.addEventListener("click", ()=>{
    navlinklist.style.left="0";
    openBtn.style.display ="none";
    closeBtn.style.display ="flex";
   
});

closeBtn.addEventListener("click", ()=>{
    navlinklist.style.left="-400px";
    closeBtn.style.display ="none";
    openBtn.style.display ="flex";
});

function closeBtnFunction() {
   navlinklist.style.left= "-400px" ; 
    closeBtn.style.display = "none";
    openBtn.style.display = "flex";
}








const nav = document.querySelector("#nav");
var lastScrollPosition = 0;

window.addEventListener( 'scroll', function(){
    var currentScrollPosition = window.scrollY;
    
    if (currentScrollPosition < lastScrollPosition) {
        nav.style.position = 'fixed';
        
    } else{
        nav.style.position = 'relative'; 
    }

    lastScrollPosition = currentScrollPosition;
});

