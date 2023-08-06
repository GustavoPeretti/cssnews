const agropecuaria = new Chart("agropecuaria", {
    type: "pie",
    data: {
        labels: [
            "Gostam",
            "Não gostam"
        ],
        datasets: [{
            labels: "Relação de alunos e ex-alunos de Agropecuária com o curso",
            data: [75, 6],
            backgroundColor: [
                "#4bbde0",
                "#F00",
            ]

        }]
    }
  });

const alimentos = new Chart("alimentos", {
    type: "pie",
    data: {
        labels: [
            "Gostam",
            "Não gostam"
        ],
        datasets: [{
            labels: "Relação de alunos e ex-alunos de Alimentos com o curso",
            data: [18, 4],
            backgroundColor: [
                "#4bbde0",
                "#F00",
            ]

        }]
    }
  });
  
const informatica = new Chart("informatica", {
    type: "pie",
    data: {
        labels: [
            "Gostam",
            "Não gostam"
        ],
        datasets: [{
            labels: "Relação de alunos e ex-alunos de Informática para Internet com o curso",
            data: [38, 7],
            backgroundColor: [
                "#4bbde0",
                "#F00",
            ]
        }]
    }
  });