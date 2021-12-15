var open = document.querySelector(".open__btn")
var modal =document.querySelector(".modal")
function toggle(){
    modal.classList.add("hide")
}
open.addEvenListener("click",toggle)