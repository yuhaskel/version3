function mostrarResultados() {
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;
    var q4 = document.getElementById('q4').value;
    var q5 = document.getElementById('q5').value;

    var results = [q1, q2, q3, q4, q5].map(Number);

    var ctx = document.getElementById('resultChart').getContext('2d');
    var resultChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
            datasets: [{
                label: 'Resultados de la encuesta',
                data: results,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 5
                }
            }
        }
    });
}

window.onload = function() {
    QRCode.toCanvas(document.getElementById('qrCode'), window.location.href, function (error) {
        if (error) console.error(error);
        console.log('¡QR generado!');
    });
};
