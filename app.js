const dark=document.querySelector(".dark")
const night=document.querySelector(".night")
const light=document.querySelector(".light")
const sidebar=document.querySelector(".sidebar");
const activeList=document.querySelector(".left-menu-icon.active");
const color=document.querySelector(".color-box.light");


dark.addEventListener("click", ()=>{
    sidebar.className= "sidebar dark";


})
night.addEventListener("click", ()=>{
    sidebar.className= "sidebar night";




})
light.addEventListener("click", ()=>{
    sidebar.className= "sidebar light";
    activeList.className += " "+"left-menu-icon"+ " "+"active"+ " "+"light";
    color.className="color-box light sammy";

})