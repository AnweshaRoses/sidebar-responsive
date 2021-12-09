const dark=document.querySelector(".dark")
const night=document.querySelector(".night")
const light=document.querySelector(".light")
const sidebar=document.querySelector(".sidebar");
const activeList=document.querySelector(".left-menu-icon");
const color=document.querySelector("#box3");
const color1=document.querySelector("#box1");
const color2=document.querySelector("#box2");


dark.addEventListener("click", ()=>{
    sidebar.className= "sidebar dark";
    color.className="color-box light sammy1";
    color1.className="color-box dark sammy1";
    color2.className="color-box night sammy1";
    
})
night.addEventListener("click", ()=>{
    sidebar.className= "sidebar night";
    color.className="color-box light sammy1";
    color1.className="color-box dark sammy1";
    color2.className="color-box night sammy1";

})
light.addEventListener("click", ()=>{
    sidebar.className= "sidebar light";
    activeList.className = "left-menu-icon active light"
    color.className="color-box light sammy2";
    color1.className="color-box dark sammy2";
    color2.className="color-box night sammy2";
    

})