function converter() {
    const dol = document.getElementById("USD").value;
    const resultado = dol * 5.06;
    document.getElementById("BRL").value=resultado.toFixed(2);
}

anime({
    targets: '.conv-area',
    opacity: [0, 1],
    duration: 1500,
    easing: 'linear',
});
