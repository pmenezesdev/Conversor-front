function converter() {
    const dol = document.getElementById("USD").value;
    const resultado = dol * 5.06;
    document.getElementById("BRL").value=resultado.toFixed(2);
}