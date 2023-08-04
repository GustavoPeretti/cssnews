let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');

let initialSize = 16; 


let texts = document.querySelectorAll('main p');

increase.addEventListener('click', () => {
    if (!(initialSize >= 4 && initialSize <= 64)) {
        return;
    }
    initialSize += 4;
    for (t of texts) {
        t.style.fontSize = `${initialSize/16}em`;
    }
});

decrease.addEventListener('click', () => {
    if (!(initialSize >= 4 && initialSize <= 64)) {
        return;
    }
    initialSize -= 2;
    for (t of texts) {
        t.style.fontSize = `${initialSize/16}em`;
    }
});

const graphic = new Chart("grafico", {
    type: "pie",
    data: {
        labels: [
            "Gostam",
            "Não gostam"
        ],
        datasets: [{
            labels: "Relação de alunos de Informática para Internet com o curso",
            data: [50, 50],
            backgroundColor: [
                "#4bbde0",
                "#F00",
            ]

        }]
    },
    options: {}
  });