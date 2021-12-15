var open = document.querySelector(".open__btn")
var
function toggle(e){
    e.classList.toggle("hide")
}
open.addEvenListener("click",toggle)