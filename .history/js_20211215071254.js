var open = document.querySelector(".open__btn")
var modal =document.querySelector(".modal")
var close= document.querySelector(".modal__footer button")
var close
function toggle(){
    modal.classList.toggle("hide")
}
open.addEventListener("click",toggle)
close.addEventListener("click",toggle)