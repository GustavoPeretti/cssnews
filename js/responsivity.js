let lowerNav = document.querySelector('nav .lower-nav');

let hamburguerButton = document.querySelector('nav span');

lowerNav.style.display = 'none';

let allowButton;

window.onload = () => {
    allowButton = window.innerWidth <= 745;
}

window.onresize = () => {
    allowButton = window.innerWidth <= 745;
    if (!(allowButton)) {
        lowerNav.style.display = 'none';
    }
};

let preventClick;

hamburguerButton.addEventListener('click', () => {
    if (preventClick) {
        return;
    }
    preventClick = true;
    if (lowerNav.style.display == 'none') {
        lowerNav.classList.toggle('opening-nav');
        lowerNav.style.display = 'block';
        setTimeout(() => {lowerNav.classList.remove('opening-nav');}, 500);
        preventClick = false;
        return;
    }
    lowerNav.classList.toggle('closing-nav');
    setTimeout(() => {lowerNav.style.display = 'none'; lowerNav.classList.remove('closing-nav');}, 500);
    preventClick = false;
});