$( document ).ready(function() {
    console.log( "ready!" );
    console.log($("#usdPrice").text());
    const BTC = $("#btcPrice").text();
    const LTC = $("#ltcPrice").text();
    const ETH = $("#ethPrice").text();
    const XRP = $("#xrpPrice").text();
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
          labels: ["BTC", "ETH", "LTC", "XRP"],
          datasets: [
            {
              label: "Assets Allocation",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","red"],
              data: [BTC,ETH,LTC,XRP]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });



});
