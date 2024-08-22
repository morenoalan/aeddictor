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

    let mainHeaderLightElements = document.getElementsByClassName('header-section-light');
    for(let i = 0; i < mainHeaderLightElements.length; i++){
        mainHeaderLightElements[i].classList.toggle('header-section-dark');
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

function applyStyle(set, style){
    if(textStyle.getPropertyValue(set) != style){
        textStyle.setProperty(set, style);
    }else{
        textStyle.setProperty(set, '');
    }
}

function sendStyle(style){
    switch(style){
        /*
        case 'font':
            applyStyle('font-size', font);
            break;
        */
        case 'bold':
            applyStyle('font-weight', 'bold');
            break;
        case 'italic':
            applyStyle('font-style', 'italic');
            break;
        case 'underline':
            applyStyle('text-decoration', 'underline');
            break;
        case 'line-through':
            applyStyle('text-decoration', 'line-through');
            break;
        default:
            console.log('No command.');
            break;
    }
}

function applyTextLeft(){
    let formatAlignChildren = document.getElementById('format-align').children[0].children;
    for(let i = 0; i < formatAlignChildren.length; i++){
        document.getElementById('format-align').children[0].children[i].style.setProperty('transform', 'scale(1)');
    }
}

/* ---> Every-Other-Things Section <--- */

document.getElementById('copyleft-year').innerHTML =  new Date().getUTCFullYear();

function toggleFullscreen(status){
    let buttonFullscreen = document.getElementById('toggle-fullscreen');
    if(status == 'fullscreen-on'){
        buttonFullscreen.children[0].innerText = 'fullscreen_exit';
        buttonFullscreen.setAttribute('onclick', 'toggleFullscreen("fullscreen-off");');
        document.getElementsByTagName('html')[0].requestFullscreen();
    }else{
        buttonFullscreen.children[0].innerText = 'fullscreen';
        buttonFullscreen.setAttribute('onclick', 'toggleFullscreen("fullscreen-on");');
        document.exitFullscreen();
    }
}