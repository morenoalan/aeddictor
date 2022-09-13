/* ---> LocalStorage Section <--- */

function saveTextOnLocalStorage(){
    localStorage.setItem('text', document.getElementById('text-area').value);
}

window.addEventListener('beforeunload', function(){
    saveTextOnLocalStorage();
});

document.getElementById('text-area').value = localStorage.getItem('text');

setInterval(function(){
    localStorage.setItem('text', document.getElementById('text-area').value);
}, 5000);

var statusTheme;

function changeTheme(statusTheme){

    document.body.classList.toggle('body-dark');

    document.getElementById('main').classList.toggle('main-dark');

    let mainHeaderLightElements = document.getElementsByClassName('main-header-light');
    for(let i = 0; i < mainHeaderLightElements.length; i++){
        mainHeaderLightElements[i].classList.toggle('main-header-dark');
    }

    let buttonLightElements = document.getElementsByClassName('button-light');
    for(let j = 0; j < buttonLightElements.length; j++){
        buttonLightElements[j].classList.toggle('button-dark');
    }

    document.getElementById('text-section').classList.toggle('text-area-dark');
    document.getElementById('text-area').classList.toggle('text-area-dark');
    document.getElementById('footer').classList.toggle('footer-dark');

    let scrollLightElements = document.getElementsByClassName('scroll-light');
    for(let k = 0; k < scrollLightElements.length; k++){
        scrollLightElements[k].classList.toggle('scroll-dark');
    }

    let buttonChangeTheme = document.getElementById('change-theme');
    if(statusTheme == 'dark'){
        buttonChangeTheme.children[0].innerText = 'light_mode';
        buttonChangeTheme.setAttribute('onclick', 'changeTheme("light");');
        localStorage.setItem('theme', 'dark');
    }else{
        buttonChangeTheme.children[0].innerText = 'dark_mode';
        buttonChangeTheme.setAttribute('onclick', 'changeTheme("dark");');
        localStorage.setItem('theme', 'light');
    }
}

function verifyThemeOnLocalStorage(){
    statusTheme = localStorage.getItem('theme');
    if(statusTheme=='dark'){
        changeTheme('dark');
    }else{
        statusTheme = 'light';
    }
    localStorage.setItem('theme', statusTheme);
}
verifyThemeOnLocalStorage();


/* ---> Styling Section <--- */

var textStyle = document.getElementById('text-area').style;

function fontText(selected){
    textStyle.setProperty('font-family', selected);
}

function sizeText(selected){
    textStyle.setProperty('font-size', selected+'pt');
}

function applyTextBold(){
    if(textStyle.getPropertyValue("font-weight") != 'bold'){
        textStyle.setProperty('font-weight', 'bold');
    }else{
        textStyle.setProperty('font-weight', '');
    }
}

function applyTextItalic(){
    if(textStyle.getPropertyValue("font-style") != 'italic'){
        textStyle.setProperty('font-style', 'italic');
        //document.getElementById('apply-text-italic').style.setProperty('background-color', 'rgb(30, 30, 30)');
    }else{
        textStyle.setProperty('font-style', '');
        //document.getElementById('apply-text-italic').style.setProperty('background-color', 'rgb(40, 40, 40)');
    }
    //document.getElementById('text-area').value = document.getElementById('text-area').value.bold();
}

function applyTextUnderline(){
    if(textStyle.getPropertyValue("text-decoration") != 'underline'){
        textStyle.setProperty('text-decoration', 'underline');
    }else{
        textStyle.setProperty('text-decoration', '');
    }
}
function applyTextThrough(){
    if(textStyle.getPropertyValue("text-decoration") != 'line-through'){
        textStyle.setProperty('text-decoration', 'line-through');
    }else{
        textStyle.setProperty('text-decoration', '');
    }
}

function applyTextLeft(){
    let formatAlignChildren = document.getElementById('format-align').children[0].children;
    for(let i = 0; i < formatAlignChildren.length; i++){
        document.getElementById('format-align').children[0].children[i].style.setProperty('transform', 'scale(1)');
    }
}


/* ---> Responsiveness Section <--- */

/*
var mainTop = document.getElementById('main').offsetTop;
function fixOnTop() {
    if(window.pageYOffset >= mainTop) {
        document.getElementById('main').classList.add('fixed-on-top');
    }else{
        document.getElementById('main').classList.remove('fixed-on-top');
    }
}
window.onscroll = function() {
    fixOnTop();
}
*/

function fixElements() {
    let mainElement = document.getElementById('main');
    let rectMain = mainElement.getBoundingClientRect();

    let footerElement = document.getElementById('footer');
    let rectFooter = footerElement.getBoundingClientRect();

    /*
    let spaceToFooter = document.body.clientHeight - document.getElementById('main').clientHeight;
    console.log(spaceToFooter+", "+document.getElementById('footer').clientHeight);
    if(spaceToFooter > document.getElementById('footer').clientHeight){
        footerElement.classList.remove('fixed-on-main');
    }else if (rectFooter.top <= rectMain.bottom){
        footerElement.classList.add('fixed-on-main');
    }
    */

    let elementsHeight = mainElement.clientHeight + footerElement.clientHeight + 20;
    console.log(elementsHeight+', '+document.body.clientHeight);
    if(document.body.clientHeight >= elementsHeight) {
        mainElement.classList.remove('fixed-on-top');
    }else if(rectMain.top <= 10) {
        mainElement.classList.add('fixed-on-top');
    }else {
        mainElement.classList.remove('fixed-on-top');
    }
/*
    let elementsHeight = rectMain.bottom + 10;
    if(document.body.clientHeight <= elementsHeight) {
        footerElement.classList.remove('fixed-on-bottom');
        footerElement.style.top = (rectMain.bottom + 10)+"px";
    }else{
        footerElement.classList.add('fixed-on-bottom');
        footerElement.style.top = auto;
    }*/
    //mainElement.style.bottom = footerElement.clientHeight;
}
window.onload = function() {
    fixElements();
}
window.onresize = function() {
    fixElements();
}

document.getElementById('copyleft-year').innerHTML =  new Date().getUTCFullYear();