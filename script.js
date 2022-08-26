function applyTextBold() {
    document.getElementById('textArea').value = document.getElementById('textArea').value.bold();
}

function changeMode(){
    document.body.classList.toggle("body-dark-mode");
    document.getElementById("main").classList.toggle("main-dark-mode");
}