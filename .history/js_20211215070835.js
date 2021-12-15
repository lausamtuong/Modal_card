var open = document.querySelector(".open__btn")
var modal =document.querySelector(".modal")
function toggle(e){
    modal.classList.toggle("hide")
}
open.addEvenListener("click",toggle)