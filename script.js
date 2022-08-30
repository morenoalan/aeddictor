function applyTextBold() {
    document.getElementById('textArea').value = document.getElementById('textArea').value.bold();
}

var statusMode = "light";
function changeMode(){
    document.body.classList.toggle("body-dark-mode");
    document.getElementById("main").classList.toggle("main-dark-mode");
    if(statusMode == "light"){
        document.getElementById("changeMode").children[0].innerText = "light_mode";
        statusMode = "dark";
    }else{
        document.getElementById("changeMode").children[0].innerText = "dark_mode";
        statusMode = "light";
    }
}

function speechToText(){

}

function applyTextLeft(){
    let formatAlignChildren = document.getElementById("formatAlign").children;
    for(let i = 0; i < formatAlignChildren.length; i++){
        document.getElementById("formatAlign").children[i].style.setProperty('transform', 'scale(1)');
    }
    //document.getElementById("formatAlign").getElementsByTagName("li")[1].style.setProperty('height', '-50px');
}

/*
Change root
document.documentElement.style.setProperty('--size-button', '40px');
*/