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

hamburguerButton.addEventListener('click', () => {
    if (lowerNav.style.display == 'none') {
        lowerNav.style.display = 'block';
        return;
    }
    lowerNav.style.display = 'none';
});