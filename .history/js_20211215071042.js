var open = document.querySelector(".open__btn")
var modal =document.querySelector(".modal")
function toggle(){
    console.log(1213)
    modal.classList.add("hide")
}
open.addEventListener("click",toggle)