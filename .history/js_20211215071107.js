var open = document.querySelector(".open__btn")
var modal =document.querySelector(".modal")
function toggle(){
 
    modal.classList.toggle("hide")
}
open.addEventListener("click",toggle)