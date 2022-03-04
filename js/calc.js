function converter() {

    let dol = document.getElementById("USD").value;
 
    fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(response => response.json())
    .then(data => {

        let real = parseFloat(data.USDBRL.high)
        let resultado = dol * real;
        document.getElementById("BRL").value=resultado.toFixed(2);
        
    })

}











anime({
    targets: '.conv-area',
    opacity: [0, 1],
    duration: 1500,
    easing: 'linear',
});


