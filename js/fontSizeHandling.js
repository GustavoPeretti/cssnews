let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');

let initialSize = 16; 

let texts = document.querySelectorAll('main p');

increase.addEventListener('click', () => {
    if (!(initialSize + 4 >= 4 && initialSize + 4 <= 64)) {
        return;
    }
    initialSize += 4;
    for (t of texts) {
        t.style.fontSize = `${initialSize/16}em`;
    }
});

decrease.addEventListener('click', () => {
    if (!(initialSize - 2 >= 4 && initialSize - 2 <= 64)) {
        return;
    }
    initialSize -= 2;
    for (t of texts) {
        t.style.fontSize = `${initialSize/16}em`;
    }
});