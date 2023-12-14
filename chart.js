document.addEventListener('DOMContentLoaded', function () {
    // Sample data for the chart
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Monthly Sales',
            borderColor: 'rgb(75, 192, 192)',
            data: [10, 30, 15, 25, 20,50,75,65],
            fill: false,
        }]
    };

    // Chart configuration
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            y: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Sales'
                }
            }]
        }
    };

    // Get the canvas element
    var ctx = document.getElementById('myLineChart').getContext('2d');

    // Create the line chart
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});
