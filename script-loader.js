document.onreadystatechange = function() {
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
        //document.querySelector('html').style.backgroundColor = 'var(--color-green-first)';
    } else {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('body').style.visibility = 'visible';
        //document.querySelector('html').style.backgroundColor = 'var(--color-background-html)';
    }
};