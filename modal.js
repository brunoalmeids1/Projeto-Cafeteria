const modal = document.getElementById("myModal");
const a = document.getElementById("modal-btn");
const span = document.getElementsByClassName("close")[0];

a.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal-btn) {
        modal.style.display = "none";
    }
}